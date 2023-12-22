import { Page } from "../../Model/Page";
import { PageRepository } from "../../Repository/PageRepository";

export interface UpdatePagesUseCase {
  invoke: (page: Page, id: string) => Promise<Page>;
}

export class UpdatePage implements UpdatePagesUseCase {
  private pageRepo: PageRepository;
  constructor(_pageRepo: PageRepository) {
    this.pageRepo = _pageRepo;
  }

  async invoke(page: Page, id: string) {
    const updated = this.pageRepo.updatePage(page, id);
    return updated;
  }
}
