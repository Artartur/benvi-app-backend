import { HydratedDocument } from 'mongoose';

export type Document<T> = HydratedDocument<T> & {
  createdAt: Date;
  updatedAt: Date;
};
