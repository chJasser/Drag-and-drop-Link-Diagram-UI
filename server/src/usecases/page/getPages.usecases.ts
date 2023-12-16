
import { PageM } from 'src/domain/model/page';
import { PageRepository } from 'src/domain/repositories/pageRepository.interface';

export class getPagesUseCases {
  constructor(private readonly pageRepository:PageRepository) {}

  async execute(): Promise<PageM[]> {
    return await this.pageRepository.findAll();
  }
}
