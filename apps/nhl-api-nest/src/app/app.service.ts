import { Injectable } from '@nestjs/common';
import { teamInterface } from '@mistertech-mono/team-interface';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: teamInterface() };
  }
}
