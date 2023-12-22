import { Page } from "../Model/Page";

export interface PageRepository {
  getPages(): Promise<Page[]>;
  createPage(page: Page): Promise<Page>;
  removePage(id: string): Promise<boolean>;
  updatePage(page: Page, id: string): Promise<Page>;
  updateLink(id: number, link: string): Promise<Page>;
}
