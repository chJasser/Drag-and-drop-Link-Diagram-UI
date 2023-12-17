import { Page } from "../../Model/Page";
import { PageRepository } from "../../Repository/PageRepository";

export interface CreatePagesUseCase {
  invoke: (page: Page) => Promise<Page>;
}

export class CreatePage implements CreatePagesUseCase {
  private pageRepo: PageRepository;
  constructor(_pageRepo: PageRepository) {
    this.pageRepo = _pageRepo;
  }

  async invoke(page: Page) {
    const created = this.pageRepo.createPage(page);
    return created;
  }
}
