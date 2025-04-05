import { IsOptional, IsString, IsNumber } from 'class-validator';

import { IntersectionType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends IntersectionType(CreateProductDto) {
  @IsOptional()
  @IsString()
  readonly productTitle: string;
  @IsOptional()
  @IsString()
  readonly productDesc: string;
  @IsOptional()
  @IsNumber()
  readonly availableStock: number;
}
