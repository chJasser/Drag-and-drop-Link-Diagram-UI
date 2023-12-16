import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PageM } from 'src/domain/model/page';
import { PageRepository } from 'src/domain/repositories/pageRepository.interface';
import { Page } from '../entities/page.entity';

@Injectable()
export class DatabasePageRepository implements PageRepository {
  constructor(
    @InjectRepository(Page)
    private readonly pageEntityRepository: Repository<Page>,
  ) {}

  // async updateContent(id: number, isDone: boolean): Promise<void> {
  //   await this.pageEntityRepository.update(
  //     {
  //       id: id,
  //     },
  //     { is_done: isDone },
  //   );
  // }
  async insert(page: PageM): Promise<PageM> {
    const pageEntity = this.pageEntity(page);
    const result = await this.pageEntityRepository.insert(pageEntity);
    return this.pageEntity(result.generatedMaps[0] as Page);
  }
  async findAll(): Promise<PageM[]> {
    const pagesEntity = await this.pageEntityRepository.find();
    return pagesEntity.map((pageEntity) => this.pageEntity(pageEntity));
  }
  async findById(id: number): Promise<PageM> {
    const pageEntity = await this.pageEntityRepository.findOneOrFail(id);
    return this.pageEntity(pageEntity);
  }
  async deleteById(id: number): Promise<void> {
    await this.pageEntityRepository.delete({ id: id });
  }



  private pageEntity(page: PageM): Page {
    const pageEntity: Page = new Page();

    pageEntity.id = page.id;
    pageEntity.title = page.title;
    pageEntity.icon = page.icon;
    pageEntity.color = page.color;
    pageEntity.form = page.form;
    pageEntity.link = page.link;
    return pageEntity;
  }
}
