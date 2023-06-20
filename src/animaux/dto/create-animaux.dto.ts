import { IsString } from 'class-validator';
export class CreateAnimauxDto {
  @IsString()
  readonly id_utilisateur: string;
  @IsString()
  readonly nom: string;
  @IsString()
  readonly age: string;
  @IsString()
  readonly race: string;
  @IsString()
  readonly sexe: boolean;
  @IsString()
  readonly poids: string;
  @IsString()
  readonly is_castre: boolean;
  @IsString()
  readonly habitude: string
  @IsString()
  readonly comportement : string
}