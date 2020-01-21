import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'Please use transaction endpoint to interact with the application';
  }
}
