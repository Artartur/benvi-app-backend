import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientDocument } from 'src/schema/patient.schema';
import { CreatePatientDto, UpdatePatientDto } from '../dto/patient.dto';

@Injectable()
export class PatientRepository {
  constructor(
    @InjectModel(Patient.name)
    private patientModel: Model<PatientDocument>,
  ) {}

  async findAll(page: number, limit: number) {
    return this.patientModel
      .find({ isActive: true })
      .skip((page - 1) * limit)
      .limit(limit);
  }

  async findAllInactive(page: number, limit: number) {
    return this.patientModel
      .find({ isActive: false })
      .skip((page - 1) * limit)
      .limit(limit);
  }

  async findByCpf(cpf: string) {
    return this.patientModel.findOne({ cpf });
  }

  async findById(id: string) {
    return this.patientModel.findById(id);
  }

  async create(patientData: CreatePatientDto) {
    return this.patientModel.create(patientData);
  }

  async update(id: string, patientData: UpdatePatientDto) {
    const patient = await this.patientModel.findOneAndUpdate(
      { _id: id },
      { $set: patientData },
      { returnDocument: 'after' },
    );

    if (!patient) throw new NotFoundException('Paciente não encontrado');

    return patient;
  }

  async delete(id: string) {
    return this.patientModel.deleteOne({ _id: id });
  }
}
