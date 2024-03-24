import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Room } from './models';
import {
  AuthModule,
  DetectionModule,
  HouseModule,
  RoomModule,
} from './modules';

const postgresqlConf: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5400,
  username: 'tientran',
  password: 'tien123@',
  database: 'saarm_db',
  entities: [Room],
  synchronize: true, // true is Unsafe, not use for product and migration
  migrations: ['dist/src/migrations/*{.ts,.js}'],
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // load: [databaseConfig],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot(postgresqlConf),
    DetectionModule,
    RoomModule,
    AuthModule,
    HouseModule,
  ],
})
export class AppModule {}
