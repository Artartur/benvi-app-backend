import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePatientDto {
  @IsDateString({}, { message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Data de aniversário é obrigatório' })
  birthDate: Date;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'CPF é obrigatório' })
  cpf: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Email é obrigatório' })
  email: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Sobrenome é obrigatório' })
  surname: string;
}

export class UpdatePatientDto {
  @IsDateString()
  @IsOptional()
  birthDate?: Date;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  surname?: string;

  isActive?: boolean;
}
