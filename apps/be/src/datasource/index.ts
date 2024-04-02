import { AllConfigType } from '@/constants/types/config';
import {
  Apartment,
  MetaLink,
  Permission,
  PermissionMapping,
  Room,
  User,
  UserRole,
} from '@/models';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService<AllConfigType>) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    console.log('[createTypeOrmOptions] ', process.env.DATABASE_PASSWORD)
    return {
      url: process.env.DATABASE_URL,
      type: process.env.DATABASE_TYPE ?? 'postgres',
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT
        ? parseInt(process.env.DATABASE_PORT, 10)
        : 5432,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
      dropSchema: false,
      keepConnectionAlive: true,
      logging:
        this.configService.get('app.nodeEnv', { infer: true }) !== 'production',
      entities: [
        Room,
        User,
        Apartment,
        MetaLink,
        Permission,
        UserRole,
        User,
        PermissionMapping,
      ],
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      cli: {
        entitiesDir: 'src',
        migrationsDir: 'src/migrations',
        subscribersDir: 'subscriber',
      },
    } as TypeOrmModuleOptions;
  }
}
