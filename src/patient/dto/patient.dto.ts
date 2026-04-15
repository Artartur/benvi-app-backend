import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Address } from 'src/interfaces/address';

export class CreatePatientDto {
  @ValidateNested()
  @Type(() => Address)
  @IsNotEmpty({ message: 'Endereço é obrigatório' })
  address: Address;

  @IsDateString({}, { message: 'Esse campo é do tipo data' })
  @IsNotEmpty({ message: 'Data de nascimento é obrigatório' })
  birthDate: Date;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'CPF é obrigatório' })
  cpf: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Email é obrigatório' })
  email: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Plano de saúde é obrigatório' })
  healthCare: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Telefone é obrigatório' })
  phoneNumber: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Sobrenome é obrigatório' })
  surname: string;
}

export class UpdatePatientDto {
  @ValidateNested()
  @Type(() => Address)
  @IsOptional()
  address?: Address;

  @IsDateString({}, { message: 'Esse campo é do tipo data' })
  @IsOptional()
  birthDate?: Date;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsOptional()
  email?: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsOptional()
  healthCare?: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsOptional()
  name?: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsOptional()
  phoneNumber?: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsOptional()
  surname?: string;

  isActive?: boolean;
}
