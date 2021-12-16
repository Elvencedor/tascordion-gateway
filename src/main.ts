import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: `localhost:${configService.get('PORT')}`,
      package: 'gateway',
      protoPath: path.resolve(__dirname, './protoFiles/gateway.proto'),
    },
  });
  await app.listen(configService.get('PORT'));
}
bootstrap();
