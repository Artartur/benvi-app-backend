import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Patient } from 'src/schema/patient.schema';
import { PatientRepository } from '../repository/patient.repository';
import { CreatePatientDto, UpdatePatientDto } from '../dto/patient.dto';

@Injectable()
export class PatientService {
  constructor(private patientRepository: PatientRepository) {}

  public async findByCpf(cpf: string): Promise<Patient> {
    const patient = await this.patientRepository.findByCpf(cpf);

    if (!patient) throw new NotFoundException('Paciente não encontrado');

    return patient;
  }

  public async findById(id: string): Promise<Patient> {
    const patient = await this.patientRepository.findById(id);

    if (!patient) throw new NotFoundException('Paciente não encontrado');

    return patient;
  }

  public async create(patientData: CreatePatientDto): Promise<Patient> {
    const patientAlreadyCreated = await this.patientRepository.findByCpf(
      patientData.cpf,
    );

    if (patientAlreadyCreated) throw new ConflictException('CPF já cadastrado');

    return this.patientRepository.create(patientData);
  }

  public async update(
    id: string,
    patientData: UpdatePatientDto,
  ): Promise<Patient> {
    return this.patientRepository.update(id, patientData);
  }

  public async delete(id: string) {
    const patient = await this.patientRepository.findById(id);

    if (!patient) throw new NotFoundException('Paciente não encontrado');

    return this.patientRepository.delete(id);
  }

  public async deactivate(id: string): Promise<Patient> {
    return this.patientRepository.update(id, { isActive: false });
  }
}
