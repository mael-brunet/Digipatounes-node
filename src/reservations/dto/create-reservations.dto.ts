import { IsString, IsNumber, IsBoolean } from 'class-validator';
export class CreateReservationsDto {
  @IsString()
  readonly id_utilisateur: string;
  @IsString()
  readonly id_animal: string;
  @IsString()
  readonly date: string;
  @IsString()
  readonly heure_debut: string;
  @IsString()
  readonly heure_fin: string;
  @IsNumber()
  readonly prix: number;
}