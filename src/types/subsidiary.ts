import { IsOptional, IsString } from 'class-validator';
import { CreateHospitalDto } from 'src/modules/hospital/dto/hospital.dto';
import { OmitType } from '@nestjs/mapped-types';

export class Subsidiary extends OmitType(CreateHospitalDto, [
  'subsidiary',
  'cnpj',
  'email',
  'healthCares',
] as const) {
  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsOptional()
  cnpj?: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsOptional()
  email?: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsOptional()
  healthCares?: string[];
}
