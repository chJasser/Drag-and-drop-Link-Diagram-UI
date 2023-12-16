import { PageRepository } from 'src/domain/repositories/pageRepository.interface';
import { ILogger } from '../../domain/logger/logger.interface';

export class updatePageUseCases {
  constructor(private readonly logger: ILogger, private readonly pageRepository: PageRepository) {}

  async execute(id: number, title: string, icon: string, color: string, form: string, link: string): Promise<void> {
    // await this.pageRepository.updateContent(id, isDone);
    this.logger.log('updatePageUseCases execute', `Page ${id} have been updated`);
  }
}
