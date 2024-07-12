import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('div')
  getDivision(@Query('a') a: string, @Query('b') b: string): any {
    const result = this.appService.getDivision(parseFloat(a), parseFloat(b));
    return { a: parseFloat(a), b: parseFloat(b), result };
  }
}
