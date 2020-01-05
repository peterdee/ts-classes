import * as https from 'https';
import { IncomingMessage } from 'http';

import { Hero } from './types';

export class DotaHeroes {
  private hostname: string = 'api.opendota.com';

  getHeroes(): Promise<Hero[]> {
    return new Promise((resolve, reject) => https.get({
      hostname: this.hostname,
      method: 'GET',
      path: '/api/heroes',
      port: 443,
    }, (response: IncomingMessage): void => {
      let data: string = '';
      response.setEncoding('utf8');
      response.on('readable', (): void => {
        const chunk: string = response.read();
        if (chunk !== null) {
          data += chunk;
        }
      });
      response.on('end', (): void => resolve(JSON.parse(data)));
    }).on('error', (error): void => reject(error)));
  }
}
