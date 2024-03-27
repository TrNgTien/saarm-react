import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: 'v1',
    prefix: 'api/',
  });
  const swaggerDocs = process.env.SWAGGER_ENDPOINT ?? '';

  const options = new DocumentBuilder()
    .setTitle('SAARM OAS')
    .setDescription('SAARM APIs docs')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(swaggerDocs, app, document);

  await app.listen(3000);
}
bootstrap();
