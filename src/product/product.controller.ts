import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProductService } from './product.service';
import { Product } from './schema/product.schema';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { SearchDto } from './dto/keyword-search.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Get('all-product')
  async getAllProduct(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post('add-product')
  @UseGuards(AuthGuard())
  async createProduct(
    @Body()
    product: CreateProductDto,
  ): Promise<{ statusCode: number; message: string; data: Product }> {
    return this.productService.create(product);
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  async getProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.findById(id);
  }

  @Get('search')
  @UseGuards(AuthGuard())
  async search(@Body() searchDto: SearchDto): Promise<any> {
    return await this.productService.search(searchDto.keyword);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async updateProduct(
    @Param('id')
    id: string,
    @Body()
    product: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateById(id, product);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async deleteProduct(
    @Param('id') id: string,
  ): Promise<{ statusCode: number; message: string }> {
    return this.productService.deleteById(id);
  }
}
