import { Injectable } from '@nestjs/common';

import { Response } from 'express';

import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async reply(data: any): Promise<any> {
    const res = await axios({
      url: data.url,
      method: data.method,
      data: data.data,
    });
  }
}
