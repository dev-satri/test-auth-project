import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Product } from './schema/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: mongoose.Model<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    const product = await this.productModel.find();
    return product;
  }

  async create(
    product: CreateProductDto,
  ): Promise<{ statusCode: number; message: string; data: Product }> {
    const res = await this.productModel.create(product);
    return {
      statusCode: 201,
      message: 'Created Successfully!',
      data: res,
    };
  }

  async findById(id: string): Promise<Product> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new NotFoundException('Please enter correct id');
    }
    const product = await this.productModel.findById(id);

    if (!product) {
      throw new NotFoundException('Not found !');
    }
    return product;
  }

  async search(keyword: string): Promise<any> {
    const results = await this.productModel.find({
      $or: [
        { productTitle: { $regex: keyword, $options: 'i' } },
        { productDesc: { $regex: keyword, $options: 'i' } },
        { availableStock: { $regex: keyword, $options: 'i' } },
      ],
    });
    return results;
  }

  async updateById(id: string, product: UpdateProductDto): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(
    id: string,
  ): Promise<{ statusCode: number; message: string }> {
    await this.productModel.findByIdAndDelete(id);
    return {
      statusCode: 204,
      message: 'Successfully Deleted',
    };
  }
}
