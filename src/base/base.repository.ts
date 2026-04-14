import { NotFoundException } from '@nestjs/common';
import { Model, Document, QueryFilter } from 'mongoose';

export abstract class BaseRepository<T extends Document, CreateDto, UpdateDto> {
  constructor(protected readonly model: Model<T>) {}

  async findAll(filter: QueryFilter<T> = {}): Promise<T[]> {
    return this.model.find(filter);
  }

  async findAllPaginated(
    filter: QueryFilter<T> = {},
    page: number,
    limit: number,
  ): Promise<T[]> {
    return this.model
      .find(filter)
      .skip((page - 1) * limit)
      .limit(limit);
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  async create(data: CreateDto): Promise<T> {
    return this.model.create(data ?? {});
  }

  async update(
    id: string,
    data: UpdateDto,
    entityName = 'Registro',
  ): Promise<T> {
    const doc = await this.model.findOneAndUpdate(
      { _id: id },
      { $set: data as QueryFilter<T> },
      { returnDocument: 'after' },
    );

    if (!doc) throw new NotFoundException(`${entityName} não encontrado`);

    return doc;
  }

  async delete(id: string) {
    return this.model.deleteOne({ _id: id });
  }
}
