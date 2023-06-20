import { Connection } from 'mongoose';
import { AnimauxSchema } from './schemas/animaux.schema';

export const AnimauxProviders = [
  {
    provide: 'ANIMAUX_MODEL',
    useFactory: (connection: Connection) => connection.model('Animaux', AnimauxSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
