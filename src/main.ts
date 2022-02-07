import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import * as fs from 'fs';

async function bootstrap() {
  let certFile, keyFile;
  try {
    certFile = fs.readFileSync('src/certs/supivisor-certificate.pem');
    keyFile = fs.readFileSync('src/certs/supivisor-key.pem');
  } catch {
    // Built app has different files structure - don't have src directory as root
    certFile = fs.readFileSync('certs/supivisor-certificate.pem');
    keyFile = fs.readFileSync('certs/supivisor-key.pem');
  }

  const httpsOptions = {
    cert: certFile,
    key: keyFile,
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
