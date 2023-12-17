import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { UsecasesProxyModule } from '../../usecases-proxy/usecases-proxy.module';

import { ApiResponseType } from '../../common/swagger/response.decorator';

import { PagePresenter } from './page.presenter';
import { getPagesUseCases } from 'src/usecases/page/getPages.usecases';
import { updatePageUseCases } from 'src/usecases/page/updatePage.usecases';
import { getPageUseCases } from 'src/usecases/page/getPage.usecases';
import { deletePageUseCases } from 'src/usecases/page/deletePage.usecases';
import { addPageUseCases } from 'src/usecases/page/addPage.usecases';
import { AddPageDto, UpdatePageDto } from './page.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('page')
@ApiTags('page')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(PagePresenter)
export class PageController {
  constructor(
    @Inject(UsecasesProxyModule.GET_PAGE_USECASES_PROXY)
    private readonly getPageUsecaseProxy: UseCaseProxy<getPageUseCases>,
    @Inject(UsecasesProxyModule.GET_PAGES_USECASES_PROXY)
    private readonly getAllPageUsecaseProxy: UseCaseProxy<getPagesUseCases>,
    @Inject(UsecasesProxyModule.PUT_PAGE_USECASES_PROXY)
    private readonly updatePageUsecaseProxy: UseCaseProxy<updatePageUseCases>,
    @Inject(UsecasesProxyModule.DELETE_PAGE_USECASES_PROXY)
    private readonly deletePageUsecaseProxy: UseCaseProxy<deletePageUseCases>,
    @Inject(UsecasesProxyModule.POST_PAGE_USECASES_PROXY)
    private readonly addPageUsecaseProxy: UseCaseProxy<addPageUseCases>,
  ) {}

  @Get('page')
  @ApiResponseType(PagePresenter, false)
  async getPage(@Query('id', ParseIntPipe) id: number) {
    const page = await this.getPageUsecaseProxy.getInstance().execute(id);
    return new PagePresenter(page);
  }

  @Get('pages')
  @ApiResponseType(PagePresenter, true)
  async getPages() {
    const pages = await this.getAllPageUsecaseProxy.getInstance().execute();
    return pages.map((page) => new PagePresenter(page));
  }

  @Put('page')
  @ApiResponseType(PagePresenter, true)
  async updatePage(@Body() updatePageDto: UpdatePageDto) {
    const { id, title, icon, color, form, link } = updatePageDto;
    await this.updatePageUsecaseProxy.getInstance().execute(id, title, icon, color, form, link);
    return 'success';
  }

  @Delete('page')
  @ApiResponseType(PagePresenter, true)
  async deletePage(@Query('id', ParseIntPipe) id: number) {
    await this.deletePageUsecaseProxy.getInstance().execute(id);
    return 'success';
  }

  @Post('page')
  @UseInterceptors(FileInterceptor('icon'))
  @ApiResponseType(PagePresenter, true)
  async addPage(@Body() addPageDto: AddPageDto, @UploadedFile() icon: Express.Multer.File) {
    if (!icon) {
      throw new BadRequestException('Icon is required.');
    }
    const { title, color, form, link } = addPageDto;
    const pageCreated = await this.addPageUsecaseProxy.getInstance().execute(title, icon.filename, color, form, link);
    return new PagePresenter(pageCreated);
  }
}
