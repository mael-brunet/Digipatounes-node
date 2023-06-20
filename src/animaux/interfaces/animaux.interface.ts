import { Document } from 'mongoose';

export interface Animaux extends Document {
  readonly id_utilisateur: string;
  readonly nom: string;
  readonly age: number;
  readonly sexe: boolean;
  readonly race: string;
  readonly is_castre: boolean;
  readonly habitude: string
  readonly poids: string;
  readonly comportement : string
}
