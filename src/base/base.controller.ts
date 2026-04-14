import {
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { Document } from 'mongoose';
import { BaseService } from './base.service';

export abstract class BaseController<
  TDocument extends Document,
  TCreateDto,
  TUpdateDto,
> {
  constructor(
    protected readonly service: BaseService<TDocument, TCreateDto, TUpdateDto>,
  ) {}

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('isActive') isActive = true,
  ) {
    return this.service.findAll(isActive, Number(page), Number(limit));
  }

  @Get('id/:id')
  async findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Post()
  async create(@Body() createDto: TCreateDto) {
    return this.service.create(createDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: TUpdateDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.service.delete(id);
  }

  @Patch(':id/deactivate')
  async deactivate(@Param('id') id: string) {
    return this.service.deactivate(id);
  }
}
