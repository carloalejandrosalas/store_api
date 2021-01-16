import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
// Modules
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
// Controller
import { AppController } from './app.controller';
//Services
import { AppService } from './app.service';
// Conf
import { TypeOrmConf } from './ormconfig';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRootAsync(TypeOrmConf), 
    UserModule, AuthModule, ProductModule, CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
