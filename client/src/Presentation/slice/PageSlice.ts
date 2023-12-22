import PageAPIDataSourceImpl from "../../Data/DataSource/API/PageAPIDataSource";
import { PageRepositoryImpl } from "../../Data/Repository/PageRepositoryImpl";
import { Page } from "../../Domain/Model/Page";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetPages } from "../../Domain/UseCase/Page/GetPages";
import { CreatePage } from "../../Domain/UseCase/Page/CreatePage";
import { UpdatePage } from "../../Domain/UseCase/Page/UpdatePage";
import { UpdateLink } from "../../Domain/UseCase/Page/UpdateLink";
import { AppDispatch } from "../store/Store";
const pagesDataSourceImpl = new PageAPIDataSourceImpl();
const PagesRepositoryImpl = new PageRepositoryImpl(pagesDataSourceImpl);
const getPagesUseCase = new GetPages(PagesRepositoryImpl);
const createPagesUseCase = new CreatePage(PagesRepositoryImpl);
const updatePageUseCase = new UpdatePage(PagesRepositoryImpl);
const updateLinkUseCase = new UpdateLink(PagesRepositoryImpl);
interface PageInterface {
  pages: Page[];
  current: Page;
}

const initialState: PageInterface = {
  pages: [],
  current: {
    title: "",
    color: "",
    link: "",
    form: "",
    icon: "",
    description: "",
  },
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPages: (state, action: PayloadAction<Page[]>) => {
      state.pages = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<Page>) => {
      state.current = action.payload;
    },
    setupdatedPage: (state, action: PayloadAction<Page>) => {
      const { id } = action.payload;
      const index = state.pages.findIndex((page) => page.id === id);
      if (index !== -1) {
        state.pages[index] = { ...state.pages[index], ...action.payload };
      }
    },
  },
});
export const getPagesAsync = async (dispatch: AppDispatch) => {
  const pages = await getPagesUseCase.invoke();
  dispatch(setPages(pages));
  return pages;
};

export const addPageAsync = (page: Page) => async (dispatch: AppDispatch) => {
  await createPagesUseCase.invoke(page);
  dispatch(getPagesAsync);
};
export const selectPage = (page: Page) => async (dispatch: AppDispatch) => {
  dispatch(setCurrentPage(page));
};

export const updatePage =
  (page: Page, id: string) => async (dispatch: AppDispatch) => {
    const updatedPage: Page = await updatePageUseCase.invoke(page, id);
    dispatch(setupdatedPage(updatedPage));
  };

export const updateLink =
  (id: number, link: string) => async (dispatch: AppDispatch) => {
    await updateLinkUseCase.invoke(id, link);
  };

export const { setPages, setCurrentPage, setupdatedPage } = pageSlice.actions;
