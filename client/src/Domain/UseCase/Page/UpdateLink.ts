
import { Page } from "../../Model/Page";
import { PageRepository } from "../../Repository/PageRepository";

export interface UpdateLinkUseCase {
  invoke: (id: number, link: string) => Promise<Page>;
}

export class UpdateLink implements UpdateLinkUseCase {
  private pageRepo: PageRepository;
  constructor(_pageRepo: PageRepository) {
    this.pageRepo = _pageRepo;
  }

  async invoke(id: number, link: string) {
    const updated = this.pageRepo.updateLink(id, link);
    return updated;
  }
}
