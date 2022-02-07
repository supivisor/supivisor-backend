import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    cert: fs.readFileSync('src\\certs\\supivisor-certificate.pem'),
    key: fs.readFileSync('src\\certs\\supivisor-key.pem'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions: httpsOptions,
  });
  const corsOptions: CorsOptions = {
    origin: [
      /^https?:\/\/localhost:4200/,
      /^https?:\/\/192\.168\.0\.[0-9]{1,3}/,
    ],
  };
  app.enableCors(corsOptions);
  await app.listen(8443);
}
bootstrap();
