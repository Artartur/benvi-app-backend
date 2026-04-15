import { Injectable, NotFoundException } from '@nestjs/common';
import { Document } from 'mongoose';
import { BaseRepository } from './base.repository';

@Injectable()
export abstract class BaseService<
  TDocument extends Document,
  TCreateDto,
  TUpdateDto,
> {
  constructor(
    protected readonly repository: BaseRepository<
      TDocument,
      TCreateDto,
      TUpdateDto
    >,
    protected readonly entityName: string,
  ) {}

  async findAll(
    isActive: boolean,
    page: number,
    limit: number,
  ): Promise<TDocument[]> {
    return this.repository.findAllPaginated({ isActive }, page, limit);
  }

  async findById(id: string): Promise<TDocument> {
    const doc = await this.repository.findById(id);

    if (!doc) throw new NotFoundException(`${this.entityName} não encontrado`);

    return doc;
  }

  async create(data: TCreateDto): Promise<TDocument> {
    return this.repository.create(data);
  }

  async update(id: string, data: TUpdateDto): Promise<TDocument> {
    const doc = await this.repository.update(id, data);

    if (!doc) throw new NotFoundException(`${this.entityName} não encontrado`);

    return doc;
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }

  async deactivate(id: string): Promise<TDocument> {
    return this.update(id, { isActive: false } as TUpdateDto);
  }
}
