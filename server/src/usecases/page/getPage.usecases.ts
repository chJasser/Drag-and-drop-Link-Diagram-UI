import { PageM } from "src/domain/model/page";
import { PageRepository } from "src/domain/repositories/pageRepository.interface";

export class getPageUseCases {
  constructor(private readonly pageRepository:PageRepository) {}

  async execute(id: number): Promise<PageM> {
    return await this.pageRepository.findById(id);
  }
}
