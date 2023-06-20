import { Document } from 'mongoose';

export interface User extends Document {
  readonly _id: number;
  readonly firstname: string;
  readonly lastname: string;
  readonly adresse: string;
  readonly email: string;
  readonly phone: string;
  readonly password: string;
}
