import { Module, Global } from '@nestjs/common';
import { TokenUtils } from './utils/token.utils';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schema/user.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [TokenUtils],
  exports: [TokenUtils],
})
export class CommonModule {}
