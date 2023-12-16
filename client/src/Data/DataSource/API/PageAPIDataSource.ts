import { Page } from "../../../Domain/Model/Page";
import PageDataSource from "../PageDataSource";
import { PageAPIEntity } from "./Entity/PageAPIEntity";
import localDB from "./LocalDB";

export default class PageAPIDataSourceImpl implements PageDataSource {
  db = localDB<PageAPIEntity>("pages");
  async createPage(
    title: string,
    icon: string,
    color: string,
    form: string,
    link: string
  ) {
    const res: Page = {
      id: new Date().getSeconds().toString(),
      title: title,
      icon: icon,
      color: color,
      form: form,
      link: link,
    };

    this.db.create({
      id: res.id,
      title: res.title,
    });
    return res;
  }

  async getPages(): Promise<Page[]> {
    const data = this.db?.getAll();

    return data?.map((item) => ({
      id: item.id,
      title: item.title,
      icon: item.icon,
      color: item.color,
      form: item.form,
      link: item.link,
    }));
  }

  async removePage(id: string) {
    return this.db.removeById(id);
  }
}
