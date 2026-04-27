import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HospitalService } from './service/hospital.service';
import { HospitalRepository } from './repository/hospital.repository';
import { HospitalController } from './controller/hospital.controller';
import { Hospital, HospitalSchema } from 'src/schema/hospital.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Hospital.name,
        schema: HospitalSchema,
      },
    ]),
  ],
  controllers: [HospitalController],
  providers: [HospitalService, HospitalRepository],
})
export class HospitalModule {}
