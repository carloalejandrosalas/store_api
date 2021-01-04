import { Module } from '@nestjs/common';
// Services
import { UserService } from './user.service';
// Controllers
import { UserController } from './user.controller';
// Modules
import { TypeOrmModule } from '@nestjs/typeorm';
// Entities
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
