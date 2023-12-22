import { PageRepository } from 'src/domain/repositories/pageRepository.interface';
import { ILogger } from '../../domain/logger/logger.interface';
import { PageM } from 'src/domain/model/page';
import { Page } from 'src/infrastructure/entities/page.entity';

export class addPageUseCases {
  constructor(private readonly logger: ILogger, private readonly pageRepository: PageRepository) {}

  async execute(title: string, icon: string, color: string, form: string, link: string, description: string): Promise<PageM> {
    const page = new Page();
    page.title = title;
    page.icon = icon;
    page.color = color;
    page.link = link;
    page.form = form;
    page.description = description;
    console.log('page page ', page);
    const result = await this.pageRepository.insert(page);
    this.logger.log('addpageUseCases execute', 'New page have been inserted');
    return result;
  }
}
