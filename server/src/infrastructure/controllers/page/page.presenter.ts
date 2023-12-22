import { ApiProperty } from '@nestjs/swagger';
import { PageM } from 'src/domain/model/page';

export class PagePresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  icon: string;
  @ApiProperty()
  color: string;
  @ApiProperty()
  form: string;
  @ApiProperty()
  link: string;
  @ApiProperty()
  description: string;

  constructor(page: PageM) {
    this.id = page.id;
    this.title = page.title;
    this.icon = page.icon;
    this.color = page.color;
    this.form = page.form;
    this.link = page.link;
    this.description = page.description;
  }
}
