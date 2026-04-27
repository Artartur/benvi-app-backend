import { Controller, Get, Param } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { PatientDocument } from 'src/schema/patient.schema';
import { CreatePatientDto, UpdatePatientDto } from '../dto/patient.dto';
import { PatientService } from '../service/patient.service';

@Controller('patient')
export class PatientController extends BaseController<
  PatientDocument,
  CreatePatientDto,
  UpdatePatientDto
> {
  constructor(private patientService: PatientService) {
    super(patientService);
  }

  @Get('cpf/:cpf')
  async findByCpf(@Param('cpf') cpf: string) {
    const patient = await this.patientService.findByCpf(cpf);

    return patient;
  }
}
