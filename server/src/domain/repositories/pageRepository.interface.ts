import { PageM } from '../model/page';

export interface PageRepository {
  insert(page: PageM): Promise<PageM>;
  findAll(): Promise<PageM[]>;
  findById(id: number): Promise<PageM>;
  // updateContent(id: number, isDone: boolean): Promise<void>;
  deleteById(id: number): Promise<void>;
}
