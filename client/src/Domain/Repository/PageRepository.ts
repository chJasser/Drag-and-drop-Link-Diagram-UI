import { Page } from "../Model/Page";

export interface PageRepository {
  getPages(): Promise<Page[]>;
  createPage(page: Page): Promise<Page>;
  removePage(id: string): Promise<boolean>;
}
