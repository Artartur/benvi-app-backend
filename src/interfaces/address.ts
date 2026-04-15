import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class Address {
  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Cidade é obrigatório' })
  city: string;

  @IsOptional()
  @IsString({ message: 'Esse campo é do tipo texto' })
  complement?: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Cidade é obrigatório' })
  country: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Cidade é obrigatório' })
  neighborhood: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Cidade é obrigatório' })
  number: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Cidade é obrigatório' })
  state: string;

  @IsString({ message: 'Esse campo é do tipo texto' })
  @IsNotEmpty({ message: 'Cidade é obrigatório' })
  street: string;

  @IsOptional()
  @IsString({ message: 'Esse campo é do tipo texto' })
  zipCode?: string;
}
