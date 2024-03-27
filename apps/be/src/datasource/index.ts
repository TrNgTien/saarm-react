import { AllConfigType } from '@/constants/types/config';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService<AllConfigType>) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const data = this.configService.get('database.type', { infer: true });
    console.log('createTypeOrmOptions - data', data);
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
      // type: this.configService.get('database.type', { infer: true }),
      // url: this.configService.get('database.url', { infer: true }),
      // host: this.configService.get('database.host', { infer: true }),
      // port: this.configService.get('database.port', { infer: true }),
      // username: this.configService.get('database.username', { infer: true }),
      // password: this.configService.get('database.password', { infer: true }),
      // synchronize: this.configService.get('database.synchronize', {
      //   infer: true,
      // }),
      dropSchema: false,
      keepConnectionAlive: true,
      logging:
        this.configService.get('app.nodeEnv', { infer: true }) !== 'production',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      cli: {
        entitiesDir: 'src',
        migrationsDir: 'src/database/migrations',
        subscribersDir: 'subscriber',
      },
      extra: {
        // based on https://node-postgres.com/apis/pool
        // max connection pool size
        max: this.configService.get('database.maxConnections', { infer: true }),
        ssl: this.configService.get('database.sslEnabled', { infer: true })
          ? {
              rejectUnauthorized: this.configService.get(
                'database.rejectUnauthorized',
                { infer: true },
              ),
              ca:
                this.configService.get('database.ca', { infer: true }) ??
                undefined,
              key:
                this.configService.get('database.key', { infer: true }) ??
                undefined,
              cert:
                this.configService.get('database.cert', { infer: true }) ??
                undefined,
            }
          : undefined,
      },
    } as TypeOrmModuleOptions;
  }
}
