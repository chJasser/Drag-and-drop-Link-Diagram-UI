import { Page } from "../../Domain/Model/Page";
import { PageRepository } from "../../Domain/Repository/PageRepository";
import PageDataSource from "../DataSource/PageDataSource";


export class PageRepositoryImpl implements PageRepository {
  dataSource: PageDataSource;

  constructor(_datasource: PageDataSource) {
    this.dataSource = _datasource;
  }

  async createPage(
    title: string,
    icon: string,
    color: string,
    form: string,
    link: string
  ) {
    return this.dataSource.createPage(title, icon, color, form, link);
  }

  async getPages() {
    return this.dataSource.getPages();
  }

  async removePage(id: string) {
    return this.dataSource.removePage(id);
  }
}
