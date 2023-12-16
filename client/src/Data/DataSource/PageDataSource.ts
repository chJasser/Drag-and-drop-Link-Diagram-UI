import { Page } from "../../Domain/Model/Page";

export default interface PageDataSource {
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
