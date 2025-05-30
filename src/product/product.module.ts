import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { ProductSchema } from './schema/product.schema';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
//This is where we have imported

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    //Place all your imports here
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
