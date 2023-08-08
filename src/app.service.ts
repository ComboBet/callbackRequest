import { Injectable } from '@nestjs/common';

import { Response } from 'express';

import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async reply(data: any): Promise<any> {
    try {
      console.log('\n\n# ------------------------------------');
      const res = await axios({
        url: data.url,
        method: data.method,
        data: data.data,
      });
      console.log(res);
      return res.data;
    } catch (e) {
      throw e;
    }
  }
}
