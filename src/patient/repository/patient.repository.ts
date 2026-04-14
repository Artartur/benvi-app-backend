import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { Patient, PatientDocument } from 'src/schema/patient.schema';
import { CreatePatientDto, UpdatePatientDto } from '../dto/patient.dto';

@Injectable()
export class PatientRepository extends BaseRepository<
  PatientDocument,
  CreatePatientDto,
  UpdatePatientDto
> {
  constructor(
    @InjectModel(Patient.name)
    private readonly patientModel: Model<PatientDocument>,
  ) {
    super(patientModel);
  }

  async findAllByStatus(isActive: boolean, page: number, limit: number) {
    return this.findAllPaginated({ isActive }, page, limit);
  }

  async findByCpf(cpf: string) {
    return this.patientModel.findOne({ cpf });
  }
}
