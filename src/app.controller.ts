import {
  I18nExceptionFilter,
  I18nNotFoundException,
} from '@anchan828/nest-i18n-i18next';
import { Controller, Get, UseFilters } from '@nestjs/common';

@Controller()
@UseFilters(I18nExceptionFilter)
export class AppController {
  @Get()
  public i18nError(): Promise<string> {
    throw new I18nNotFoundException({ key: 'test' });
  }
}
