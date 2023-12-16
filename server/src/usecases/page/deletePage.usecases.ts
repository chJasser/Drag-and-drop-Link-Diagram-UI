import { PageRepository } from 'src/domain/repositories/pageRepository.interface';
import { ILogger } from '../../domain/logger/logger.interface';

export class deletePageUseCases {
  constructor(private readonly logger: ILogger, private readonly pageRepository: PageRepository) {}

  async execute(id: number): Promise<void> {
    await this.pageRepository.deleteById(id);
    this.logger.log('deletePageUseCases execute', `Page ${id} have been deleted`);
  }
}
