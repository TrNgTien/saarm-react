import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule, BillingModule, DetectionModule } from './modules';
import { ManagementModule } from './modules/management';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // load: [databaseConfig],
      envFilePath: ['.env'],
    }),

    DetectionModule,
    ManagementModule,
    AuthModule,
    BillingModule,
  ],
})
export class AppModule {}
