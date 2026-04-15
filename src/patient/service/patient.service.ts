import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { Patient, PatientDocument } from 'src/schema/patient.schema';
import { PatientRepository } from '../repository/patient.repository';
import { CreatePatientDto, UpdatePatientDto } from '../dto/patient.dto';

@Injectable()
export class PatientService extends BaseService<
  PatientDocument,
  CreatePatientDto,
  UpdatePatientDto
> {
  constructor(private patientRepository: PatientRepository) {
    super(patientRepository, 'Paciente');
  }

  async create(patientData: CreatePatientDto): Promise<PatientDocument> {
    const alreadyExists = await this.patientRepository.findByCpf(
      patientData.cpf,
    );

    if (alreadyExists) throw new ConflictException('CPF já cadastrado');

    return super.create(patientData);
  }

  async findByCpf(cpf: string): Promise<Patient> {
    const patient = await this.patientRepository.findByCpf(cpf);

    if (!patient) throw new NotFoundException('Paciente não encontrado');

    return patient;
  }
}
