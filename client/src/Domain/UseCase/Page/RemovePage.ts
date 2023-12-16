import { PageRepository } from "../../Repository/PageRepository";

export interface RemovePagesUseCase {
  invoke: (id: string) => Promise<boolean>;
}

export class RemovePage implements RemovePagesUseCase {
  private pageRepo: PageRepository;
  constructor(_pageRepo: PageRepository) {
    this.pageRepo = _pageRepo;
  }

  async invoke(id: string) {
    return this.pageRepo.removePage(id);
  }
}
