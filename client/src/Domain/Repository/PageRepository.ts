import { Page } from "../Model/Page";

export interface PageRepository {
  getPages(): Promise<Page[]>;
  createPage(
    title: string,
    icon: string,
    color: string,
    form: string,
    link: string
  ): Promise<Page>;
  removePage(id: string): Promise<boolean>;
}
