import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Sebastien Ethier, <a href="https://www.udemy.com/certificate/UC-YW5L2W0E/">Udemy Certificate</a>, Instructor: Baljeet Singh';
  }
}
