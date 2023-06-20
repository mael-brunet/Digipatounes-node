import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { ReservationsProviders } from './reservations.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [ReservationsService,
    ...ReservationsProviders,],
  exports: [ReservationsService],
controllers: [ReservationsController],
imports: [DatabaseModule],
})
export class ReservationsModule {}
