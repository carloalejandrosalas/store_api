import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}
  
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.save(createCategoryDto)
  }

  findAll() {
    return this.categoryRepository.find({
      where: {
        is_active: true
      }
    })
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOne(id)
    
    if (! category) {
      throw new NotFoundException('Category not found')
    }

    return category
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.findOne(id)

    category.name = updateCategoryDto.name

    return this.categoryRepository.save(category)

  }

  async remove(id: number) {
    const category = await this.findOne(id)

    category.is_active = false

    await this.categoryRepository.save(category)

    return {
      delete: true
    }
  }
}
