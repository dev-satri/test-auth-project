import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'product',
  timestamps: true,
})
export class Product {
  @Prop()
  productTitl: string;

  @Prop()
  productDesc: string;

  @Prop()
  availableStock: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
