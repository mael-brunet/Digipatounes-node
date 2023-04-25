import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (configService: ConfigService) =>
      await mongoose.connect(
        `mongodb+srv://${configService.get<string>('database.user')}:${configService.get<string>('database.password')}@${configService.get<string>('database.host')}/?retryWrites=true&w=majority`,
      ),
    inject: [ConfigService],
  },
];