import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address } from 'src/types/address';
import { Document } from 'src/types/genericDocument';

export type HospitalDocument = Document<Hospital>;

@Schema({ timestamps: true })
export class Hospital {
  @Prop({ require: true })
  address: Address;

  @Prop({ required: true, unique: true })
  cnpj: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  healthCares: string[];

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ required: true })
  name: string;
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
