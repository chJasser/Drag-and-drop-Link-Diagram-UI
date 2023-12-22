import { DynamicModule, Module } from '@nestjs/common';

import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';

import { RepositoriesModule } from '../repositories/repositories.module';

import { DatabasePageRepository } from '../repositories/page.repository';

import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { EnvironmentConfigService } from '../config/environment-config/environment-config.service';
import { UseCaseProxy } from './usecases-proxy';

import { getPagesUseCases } from 'src/usecases/page/getPages.usecases';
import { addPageUseCases } from 'src/usecases/page/addPage.usecases';
import { updatePageUseCases } from 'src/usecases/page/updatePage.usecases';
import { deletePageUseCases } from 'src/usecases/page/deletePage.usecases';
import { getPageUseCases } from 'src/usecases/page/getPage.usecases';
import { updateLinkUsecases } from 'src/usecases/page/updateLink.usecases';

@Module({
  imports: [LoggerModule, EnvironmentConfigModule, EnvironmentConfigService, RepositoriesModule, ExceptionsModule],
})
export class UsecasesProxyModule {
  static GET_PAGE_USECASES_PROXY = 'getPageUsecasesProxy';
  static GET_PAGES_USECASES_PROXY = 'getPagesUsecasesProxy';
  static POST_PAGE_USECASES_PROXY = 'postPageUsecasesProxy';
  static DELETE_PAGE_USECASES_PROXY = 'deletePageUsecasesProxy';
  static PUT_PAGE_USECASES_PROXY = 'putPageUsecasesProxy';
  static EDIT_LINK_USECASES_PROXY = 'editLinkUsecasesProxy';
  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [DatabasePageRepository],
          provide: UsecasesProxyModule.GET_PAGE_USECASES_PROXY,
          useFactory: (pageRepository: DatabasePageRepository) => new UseCaseProxy(new getPageUseCases(pageRepository)),
        },
        {
          inject: [DatabasePageRepository],
          provide: UsecasesProxyModule.GET_PAGES_USECASES_PROXY,
          useFactory: (pageRepository: DatabasePageRepository) => new UseCaseProxy(new getPagesUseCases(pageRepository)),
        },
        {
          inject: [LoggerService, DatabasePageRepository],
          provide: UsecasesProxyModule.POST_PAGE_USECASES_PROXY,
          useFactory: (logger: LoggerService, pageRepository: DatabasePageRepository) =>
            new UseCaseProxy(new addPageUseCases(logger, pageRepository)),
        },
        {
          inject: [LoggerService, DatabasePageRepository],
          provide: UsecasesProxyModule.PUT_PAGE_USECASES_PROXY,
          useFactory: (logger: LoggerService, pageRepository: DatabasePageRepository) =>
            new UseCaseProxy(new updatePageUseCases(logger, pageRepository)),
        },
        {
          inject: [LoggerService, DatabasePageRepository],
          provide: UsecasesProxyModule.DELETE_PAGE_USECASES_PROXY,
          useFactory: (logger: LoggerService, pageRepository: DatabasePageRepository) =>
            new UseCaseProxy(new deletePageUseCases(logger, pageRepository)),
        },

        {
          inject: [LoggerService, DatabasePageRepository],
          provide: UsecasesProxyModule.EDIT_LINK_USECASES_PROXY,
          useFactory: (logger: LoggerService, pageRepository: DatabasePageRepository) =>
            new UseCaseProxy(new updateLinkUsecases(logger, pageRepository)),
        },
      ],
      exports: [
        UsecasesProxyModule.GET_PAGE_USECASES_PROXY,
        UsecasesProxyModule.EDIT_LINK_USECASES_PROXY,
        UsecasesProxyModule.GET_PAGES_USECASES_PROXY,
        UsecasesProxyModule.POST_PAGE_USECASES_PROXY,
        UsecasesProxyModule.PUT_PAGE_USECASES_PROXY,
        UsecasesProxyModule.DELETE_PAGE_USECASES_PROXY,
    
      ],
    };
  }
}
