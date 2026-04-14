import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PatientDocument } from 'src/schema/patient.schema';
import { CreatePatientDto, UpdatePatientDto } from '../dto/patient.dto';
import { PatientRepository } from '../repository/patient.repository';
import { PatientService } from '../service/patient.service';
import { formatMultipleTimezones, formatTimezone } from 'src/utils/formatData';

@Controller('patient')
export class PatientController {
  constructor(
    private patientRepository: PatientRepository,
    private patientService: PatientService,
  ) {}

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('isActive') isActive = true,
  ) {
    const patients = await this.patientRepository.findAllByStatus(
      isActive,
      Number(page),
      Number(limit),
    );

    return formatMultipleTimezones(patients);
  }

  @Get('id/:id')
  async findById(@Param('id') id: string) {
    const patient = await this.patientService.findById(id);

    return formatTimezone(patient);
  }

  @Get('cpf/:cpf')
  async findByCpf(@Param('cpf') cpf: string) {
    const patient = (await this.patientService.findByCpf(
      cpf,
    )) as PatientDocument;

    return formatTimezone(patient);
  }

  @Post()
  async create(@Body() patientData: CreatePatientDto) {
    return this.patientService.create(patientData);
  }

  @Patch(':id/deactivate')
  async deactivate(@Param('id') id: string) {
    return this.patientService.deactivate(id);
  }

  @Put(':id')
  async update(@Body() patientData: UpdatePatientDto, @Param('id') id: string) {
    return this.patientService.update(id, patientData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.patientService.delete(id);
  }
}
