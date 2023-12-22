import { PageM } from '../model/page';

export interface PageRepository {
  insert(page: PageM): Promise<PageM>;
  findAll(): Promise<PageM[]>;
  findById(id: number): Promise<PageM>;
  updateContent(page: PageM): Promise<PageM>;
  updateLink(idPage: number, link: string): Promise<void>;
  deleteById(id: number): Promise<void>;
}
