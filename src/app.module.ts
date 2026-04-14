import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [DatabaseModule, PatientModule],
  providers: [],
})
export class AppModule {}
