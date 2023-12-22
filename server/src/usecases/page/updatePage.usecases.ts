import { PageRepository } from 'src/domain/repositories/pageRepository.interface';
import { ILogger } from '../../domain/logger/logger.interface';

import { Page } from 'src/infrastructure/entities/page.entity';
import { PageM } from 'src/domain/model/page';

export class updatePageUseCases {
  constructor(private readonly logger: ILogger, private readonly pageRepository: PageRepository) {}

  async execute(
    id: number,
    title: string,
    icon: string,
    color: string,
    form: string,
    link: string,
    filename: string,
  ): Promise<PageM> {
    const page = new Page();
    page.id = id;
    page.title = title;
    page.color = color;
    page.form = form;
    page.link = link;
    
    if (filename !== '') {
      page.icon = filename;
    }
    const result = await this.pageRepository.updateContent(page);
    this.logger.log('updatePageUseCases execute', `Page ${page.id} have been updated`);
    return result;
  }
}
