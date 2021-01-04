import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User) 
    private usersRepository: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto)
  }

  findAll() {
    return this.usersRepository.find({
      where: {
        is_active: true
      }
    })
  }

  findOne(authRef: number|string) {
    let filter: any = {}

    if (typeof (authRef) === 'number') {
      filter.id = authRef
    } else {
      filter = [
        { email: authRef },
        { username: authRef }
      ]
    }
    return this.usersRepository.findOne({
      where: filter,
      relations: ['role']
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let user = await this.usersRepository.findOne(id)

    user = {
      ...user,
      ...updateUserDto,
      updated_at: new Date()
    }

    return this.usersRepository.save(user)
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOne(id)

    user.email = ''
    user.username = ''
    user.is_active = false

    return this.usersRepository.save(user)

  }
}
