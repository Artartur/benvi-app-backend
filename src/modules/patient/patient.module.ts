import { Module } from '@nestjs/common';
import { PatientController } from './controller/patient.controller';
import { PatientService } from './service/patient.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Patient, PatientSchema } from 'src/schema/patient.schema';
import { PatientRepository } from './repository/patient.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Patient.name,
        schema: PatientSchema,
      },
    ]),
  ],
  controllers: [PatientController],
  providers: [PatientService, PatientRepository],
})
export class PatientModule {}
