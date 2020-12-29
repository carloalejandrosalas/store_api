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

@Module({
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRootAsync(TypeOrmConf), 
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
