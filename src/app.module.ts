import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import configuration from './config/configuration';
import * as dotenv from "dotenv";
dotenv.config({ path: 'src/.env' });

@Module({
  imports: [AuthModule, UsersModule, ConfigModule.forRoot({
    isGlobal: true, envFilePath: '.env', load: [configuration],
  })],
})
export class AppModule {}