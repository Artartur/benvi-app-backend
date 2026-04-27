import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PatientModule } from './modules/patient/patient.module';
import { HospitalModule } from './modules/hospital/hospital.module';

@Module({
  imports: [DatabaseModule, PatientModule, HospitalModule],
  providers: [],
})
export class AppModule {}
