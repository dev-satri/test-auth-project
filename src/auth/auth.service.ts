import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import * as jwt from 'jsonwebtoken';
import { LoginDto } from './dto/login.dto';
import { TokenUtils } from 'src/common/utils/token.utils';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
    private tokenUtils: TokenUtils,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<any> {
    const { name, email, password } = signUpDto;

    const userExists = await this.userModel.findOne({ email });
    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.FORBIDDEN);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = this.jwtService.sign({
      id: user._id,
    });
    const id = user._id;
    return { id, name: user.name, email: user.email, token };
  }

  async login(loginDto: LoginDto): Promise<any> {
    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const token = this.jwtService.sign({
      id: user._id,
    });
    const id = user._id;
    return { id, name: user.name, email: user.email, token };
  }

  async user(headers: any): Promise<any> {
    const id = await this.tokenUtils.extractUserIdFromToken(headers);
    const user = await this.userModel.findById(id);
    return {
      id,
      name: user.name,
      email: user.email,
    };
  }

  async updateUser(headers: any, updateUser: UpdateUserDto): Promise<any> {
    const id = await this.tokenUtils.extractUserIdFromToken(headers);
    // Handle password hashing if the password is being updated
    if (updateUser.password) {
      updateUser.password = await bcrypt.hash(updateUser.password, 10);
    }
    // Update the user with the provided fields
    const user = await this.userModel.findByIdAndUpdate(
      id,
      { $set: updateUser }, // Only updates the fields provided in the updateUser object
      { new: true, runValidators: true }, // Return the updated document and validate fields
    );

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return {
      id: user._id,
      name: user.name,
      email: user.email,
    };
  }

  async allUser(): Promise<User[]> {
    const product = await this.userModel.find({}, { password: 0 });
    return product;
  }
}
