import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { dbConnection } from 'environment';

@Module({
  imports: [MongooseModule.forRoot(dbConnection)],
})
export class DatabaseModule {}
