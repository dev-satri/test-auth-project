import { UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/schema/user.schema';

export class TokenUtils {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async extractUserIdFromToken(headers: any): Promise<string> {
    const authorizationHeader = headers?.authorization;
    if (!authorizationHeader) {
      throw new UnauthorizedException('Invalid or missing Bearer token');
    }

    const token = authorizationHeader.replace('Bearer ', '');
    const secret = process.env.JWT_SECRET;

    try {
      const decoded = jwt.verify(token, secret);
      return decoded['id'];
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
