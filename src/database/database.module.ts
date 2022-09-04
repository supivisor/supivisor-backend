import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {
  constructor() {
    DatabaseModule.checkIfDatabaseUrlExists();
  }

  private static checkIfDatabaseUrlExists() {
    const uri = process.env.DATABASE_URI;
    if (!uri)
      throw new Error(
        `Database URI not defined.\nCheck your .env file and see if there is defined a variable named 'DATABASE_URI'`,
      );
  }
}
