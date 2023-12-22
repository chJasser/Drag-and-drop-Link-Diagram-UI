import { Page } from "../../../Domain/Model/Page";
import PageDataSource from "../PageDataSource";
import { PageAPIEntity } from "./Entity/PageAPIEntity";
import localDB from "./LocalDB";
import { axiosPrivate } from "./axios";

export default class PageAPIDataSourceImpl implements PageDataSource {
  db = localDB<PageAPIEntity>("pages");
  async createPage(page: Page) {
    const formData = new FormData();

    formData.append("title", page.title);
    formData.append("icon", page.icon);
    formData.append("color", page.color);
    formData.append("form", page.form);
    formData.append("link", page.link);
    formData.append("description", page.description);
    const response = await axiosPrivate.post<{ data: Page }>(
      "/page/page",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data.data;
  }

  async updatePage(page: Page, id: string) {
    const formData = new FormData();
    formData.append("title", page.title);
    formData.append("icon", page.icon);
    formData.append("color", page.color);
    formData.append("form", page.form);
    formData.append("link", page.link);
    formData.append("id", id);

    const response = await axiosPrivate.put<{ data: Page }>(
      "/page/page",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data.data;
  }

  async updateLink(id: number, link: string) {
    const response = await axiosPrivate.put<{ data: Page }>(
      `page/link?id=${id}&link=${link}`
    );
    return response.data.data;
  }

  async getPages(): Promise<Page[]> {
    const response = await axiosPrivate.get<{ data: Page[] }>("/page/pages");
    return response.data.data;
  }

  async removePage(id: string) {
    return this.db.removeById(id);
  }
}
