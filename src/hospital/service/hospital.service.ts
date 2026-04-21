import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { Hospital, HospitalDocument } from 'src/schema/hospital.schema';
import { CreateHospitalDto, UpdateHospitalDto } from '../dto/hospital.dto';
import { HospitalRepository } from '../repository/hospital.repository';

@Injectable()
export class HospitalService extends BaseService<
  HospitalDocument,
  CreateHospitalDto,
  UpdateHospitalDto
> {
  constructor(private hospitalRepository: HospitalRepository) {
    super(hospitalRepository, 'Hospital');
  }

  async create(hospitalData: CreateHospitalDto): Promise<HospitalDocument> {
    const alreadyExists = await this.hospitalRepository.findByCnpj(
      hospitalData.cnpj,
    );

    if (alreadyExists) throw new ConflictException('CNPJ já cadastrado');

    return super.create(hospitalData);
  }

  async findByCnpj(cpf: string): Promise<Hospital> {
    const hospital = await this.hospitalRepository.findByCnpj(cpf);

    if (!hospital) throw new NotFoundException('Hospital não encontrado');

    return hospital;
  }
}
