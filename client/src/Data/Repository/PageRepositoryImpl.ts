import { Page } from "../../Domain/Model/Page";
import { PageRepository } from "../../Domain/Repository/PageRepository";
import PageDataSource from "../DataSource/PageDataSource";

export class PageRepositoryImpl implements PageRepository {
  dataSource: PageDataSource;

  constructor(_datasource: PageDataSource) {
    this.dataSource = _datasource;
  }

  async createPage(page: Page) {
    return this.dataSource.createPage(page);
  }

  async getPages() {
    return this.dataSource.getPages();
  }

  async removePage(id: string) {
    return this.dataSource.removePage(id);
  }
  async updatePage(page: Page, id: string) {
    return this.dataSource.updatePage(page, id);
  }

  async updateLink(id: number, link: string) {
    return this.dataSource.updateLink(id, link);
  }
}
