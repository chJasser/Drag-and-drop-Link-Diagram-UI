import { Page } from "../../Domain/Model/Page";

export default interface PageDataSource {
  getPages(): Promise<Page[]>;
  createPage(page: Page): Promise<Page>;
  removePage(id: string): Promise<boolean>;
}
