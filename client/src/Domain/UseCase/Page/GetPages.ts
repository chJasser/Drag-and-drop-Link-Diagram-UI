import { Page } from "../../Model/Page";
import { PageRepository } from "../../Repository/PageRepository";

export interface GetPagesUseCase {
  invoke: () => Promise<Page[]>;
}

export class GetPages implements GetPagesUseCase {
  private pageRepo: PageRepository;
  constructor(_pageRepo: PageRepository) {
    this.pageRepo = _pageRepo;
  }

  async invoke() {
    return this.pageRepo.getPages();
  }
}
