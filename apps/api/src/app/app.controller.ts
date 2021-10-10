import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';


import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('auth')
  authenticate(@Body() body: { code: string }): any {
    return this.appService.authenticateUser(body.code);
  }
}
