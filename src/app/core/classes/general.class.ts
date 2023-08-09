export type AnyRecord = Record<string, any>;
export type UnknownRecord = Record<string, unknown>;

export interface BaseEntity {
  id: string;
  updatedAt?: string;
  createdAt?: string;
  deletedAt?: string;
}
