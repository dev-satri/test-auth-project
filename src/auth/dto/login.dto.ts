import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
export class LoginDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly email: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}
