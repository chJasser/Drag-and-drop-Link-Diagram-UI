import { PageRepository } from 'src/domain/repositories/pageRepository.interface';
import { ILogger } from '../../domain/logger/logger.interface';

export class updateLinkUsecases {
  constructor(private readonly logger: ILogger, private readonly pageRepository: PageRepository) {}

  async execute(id: number, link: string): Promise<void> {
    await this.pageRepository.updateLink(id, link);
    this.logger.log('updateLinkCases execute', `Page ${id} have been updated`);
  }
}
