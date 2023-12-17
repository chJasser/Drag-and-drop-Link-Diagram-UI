import { useState } from "react";

import { toast } from "react-toastify";
import { Page } from "../../Domain/Model/Page";
import PageAPIDataSourceImpl from "../../Data/DataSource/API/PageAPIDataSource";
import { PageRepositoryImpl } from "../../Data/Repository/PageRepositoryImpl";
import { GetPages } from "../../Domain/UseCase/Page/GetPages";
import { CreatePage } from "../../Domain/UseCase/Page/CreatePage";
import { RemovePage } from "../../Domain/UseCase/Page/RemovePage";

const initialPageState: Page = {
  title: "",
  color: "",
  link: "",
  form: "",
  icon: "",
};

export default function PageListViewModel() {
  const [pages, setPages] = useState<Page[]>([]);

  const [page, setPage] = useState<Page>(initialPageState);
  const pagesDataSourceImpl = new PageAPIDataSourceImpl();
  const PagesRepositoryImpl = new PageRepositoryImpl(pagesDataSourceImpl);

  const getPagesUseCase = new GetPages(PagesRepositoryImpl);
  const createPagesUseCase = new CreatePage(PagesRepositoryImpl);
  const removePagesUseCase = new RemovePage(PagesRepositoryImpl);

  function _resetValue() {
    setPage(initialPageState);
  }

  async function getPages() {
    console.log("getPages");
    setPages(await getPagesUseCase.invoke());
  }
  async function createPage(page: Page) {
    console.log("createPage");
    try {
      const createdPage = await createPagesUseCase.invoke(page);
      //setPages((prev) => [...prev, createdPage]);
      getPages();
      _resetValue();
    } catch (e) {
      _resetValue();
      if (e instanceof Error) {
        toast(e.message);
      }
    }
  }

  console.log("pages", pages);
  async function removePage(id?: string) {
    if (id) {
      const isRemoved = await removePagesUseCase.invoke(id);
      if (isRemoved) {
        setPages((prev) => {
          return [...prev.filter((i) => i.id !== id)];
        });
      }
    }
  }

  function onChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setPage((prev) => ({ ...prev, [name]: value }));
  }

  return {
    getPages,
    onChangeValue,
    createPage,
    removePage,
    pages,
    page,
  };
}
