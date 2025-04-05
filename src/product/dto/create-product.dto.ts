import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly productTitl: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly productDesc: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly availableStock: number;
}
