import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";


export const TypeOrmConf: TypeOrmModuleAsyncOptions = {
    useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: Boolean(process.env.production),
    })
}