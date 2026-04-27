import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Address } from 'src/types/address';
import { Subsidiary } from 'src/types/subsidiary';

export class CreateHospitalDto {
  @ValidateNested()
  @Type(() => Address)
  @IsNotEmpty({ message: 'Endereço é obrigatório' })
  address: Address;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'CNPJ é obrigatório' })
  cnpj: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Email é obrigatório' })
  email: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Plano de saúde é obrigatório' })
  healthCares: string[];

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Telefone é obrigatório' })
  phoneNumber: string;

  @ValidateNested({ each: true })
  @Type(() => Subsidiary)
  @IsOptional()
  subsidiary?: Subsidiary[];
}

export class UpdateHospitalDto {
  @ValidateNested()
  @Type(() => Address)
  @IsOptional()
  address?: Address;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsOptional()
  email?: string;

  isActive?: boolean;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsOptional()
  name?: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsOptional()
  phoneNumber?: string;

  @ValidateNested({ each: true })
  @Type(() => Subsidiary)
  @IsOptional()
  subsidiary?: Subsidiary[];
}
