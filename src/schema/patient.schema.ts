import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'src/interfaces/genericDocument';

export type PatientDocument = Document<Patient>;

@Schema({ timestamps: true })
export class Patient {
  @Prop({ required: true })
  birthDate: Date;

  @Prop({ required: true, unique: true })
  cpf: string;

  @Prop({ required: true })
  email: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  surname: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
