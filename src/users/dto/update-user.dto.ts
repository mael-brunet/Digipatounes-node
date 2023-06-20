import { IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  readonly firstname: string;

  @IsString()
  readonly lastname: string;

  @IsString()
  readonly adresse: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly password: string;
}