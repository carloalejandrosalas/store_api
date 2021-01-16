import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  create(createProductDto: CreateProductDto, category: Category) {
    return this.productRepository.save({
      ...createProductDto,
      category
    })
  }

  findAll() {
    return this.productRepository.find({
      where: {
        is_active: true
      }
    })
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne(id)

    if (! product) {
      throw new NotFoundException('Product not found')
    }

    return product
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    let product = await this.findOne(id)
    
    product = {
      ...product,
      ...updateProductDto
    }

    return this.productRepository.save(product)
  }

  async remove(id: number) {
    const product = await this.productRepository.findOne(id)
 
    product.is_active = false

    if (product) {
      return this.productRepository.save(product)
    }
  }
}
