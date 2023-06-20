import { Connection } from 'mongoose';
import { ReservationsSchema } from './schemas/reservations.schema';

export const ReservationsProviders = [
  {
    provide: 'RESERVATIONS_MODEL',
    useFactory: (connection: Connection) => connection.model('Reservations', ReservationsSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
