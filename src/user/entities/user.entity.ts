import { Prop } from '@nestjs/mongoose';

export class UserEntity {
  @Prop()
  name: string;

  @Prop()
  email: string;
}
