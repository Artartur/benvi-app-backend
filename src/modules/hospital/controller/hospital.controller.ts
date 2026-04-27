import { Controller, Get, Param } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { HospitalDocument } from 'src/schema/hospital.schema';
import { CreateHospitalDto, UpdateHospitalDto } from '../dto/hospital.dto';
import { HospitalService } from '../service/hospital.service';

@Controller('hospital')
export class HospitalController extends BaseController<
  HospitalDocument,
  CreateHospitalDto,
  UpdateHospitalDto
> {
  constructor(private hospitalService: HospitalService) {
    super(hospitalService);
  }

  @Get('cnpj/:cnpj')
  async findByCpf(@Param('cnpj') cnpj: string) {
    const hospital = await this.hospitalService.findByCnpj(cnpj);

    return hospital;
  }
}
