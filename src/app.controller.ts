import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  UsePipes,
  UseGuards,
  SetMetadata,
  ParseIntPipe,
  Injectable,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async reply(@Body() data: any): Promise<any> {
    return this.appService.reply(data);
  }
}
