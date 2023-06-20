import { Document } from 'mongoose';

export interface Reservations extends Document {
  readonly id_utilisateur: string;
  readonly id_animal: string;
  readonly date: string;
  readonly heure_debut: string;
  readonly heure_fin: string;
  readonly prix: number;
}
