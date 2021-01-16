import { Module } from '@nestjs/common';
// Services
import { ProductService } from './product.service';
// Controllers
import { ProductController } from './product.controller';
// Modules
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from 'src/category/category.module';
// Entities
import { Product } from './entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    CategoryModule
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
