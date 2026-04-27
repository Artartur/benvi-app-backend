import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { Hospital, HospitalDocument } from 'src/schema/hospital.schema';
import { CreateHospitalDto, UpdateHospitalDto } from '../dto/hospital.dto';

@Injectable()
export class HospitalRepository extends BaseRepository<
  HospitalDocument,
  CreateHospitalDto,
  UpdateHospitalDto
> {
  constructor(
    @InjectModel(Hospital.name)
    private readonly hospitalModel: Model<HospitalDocument>,
  ) {
    super(hospitalModel);
  }

  async findByCnpj(cnpj: string) {
    return this.hospitalModel.findOne({ cnpj });
  }

  async findByName(name: string) {
    return this.hospitalModel.findOne({ name });
  }
}
