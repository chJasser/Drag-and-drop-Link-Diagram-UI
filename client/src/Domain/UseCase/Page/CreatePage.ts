import { Page } from "../../Model/Page";
import { PageRepository } from "../../Repository/PageRepository";

export interface CreatePagesUseCase {
  invoke: (
    title: string,
    icon: string,
    color: string,
    form: string,
    link: string
  ) => Promise<Page>;
}

export class CreatePage implements CreatePagesUseCase {
  private pageRepo: PageRepository;
  constructor(_pageRepo: PageRepository) {
    this.pageRepo = _pageRepo;
  }

  async invoke(
    title: string,
    icon: string,
    color: string,
    form: string,
    link: string
  ) {
    const created = this.pageRepo.createPage(title, icon, color, form, link);
    return created;
  }
}
