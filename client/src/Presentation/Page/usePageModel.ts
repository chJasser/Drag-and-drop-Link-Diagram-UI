import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { Page } from "../../Domain/Model/Page";
import PageAPIDataSourceImpl from "../../Data/DataSource/API/PageAPIDataSource";
import { PageRepositoryImpl } from "../../Data/Repository/PageRepositoryImpl";
import { GetPages } from "../../Domain/UseCase/Page/GetPages";
import { CreatePage } from "../../Domain/UseCase/Page/CreatePage";
import { RemovePage } from "../../Domain/UseCase/Page/RemovePage";

const initialPageState: Page = {
  description: "",
  title: "",
  color: "",
  link: "",
  form: "",
  icon: "",
};

export default function usePageModel() {
  const [pages, setPages] = useState<Page[]>([]);

  const [page, setPage] = useState<Page>(initialPageState);
  const pagesDataSourceImpl = new PageAPIDataSourceImpl();
  const PagesRepositoryImpl = new PageRepositoryImpl(pagesDataSourceImpl);
  const getPagesUseCase = new GetPages(PagesRepositoryImpl);
  const createPagesUseCase = new CreatePage(PagesRepositoryImpl);

  const removePagesUseCase = new RemovePage(PagesRepositoryImpl);
  async function getPages() {
    setPages(await getPagesUseCase.invoke());
  }
  useEffect(() => {
    getPages();
  }, []);
  async function createPage(page: Page) {
    try {
      const createdPage = await createPagesUseCase.invoke(page);
      setPages((prev) => [...prev, createdPage]);
    } catch (e) {
      if (e instanceof Error) {
        toast(e.message);
      }
    }
  }
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
  function onChangeValue() {
    const page: Page = {
      description: "",
      title: "title",
      color: "color",
      form: "form",
      icon: "icon",
      link: "link",
    };
    setPage(page);
  }
  return {
    getPages,
    onChangeValue,
    createPage,
    removePage,
    pages,
    page,
    setPage,
  };
}
