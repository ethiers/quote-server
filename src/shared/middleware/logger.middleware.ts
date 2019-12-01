import {Injectable, Logger, NestMiddleware} from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    Logger.log('Quotes API request: ' +  req.baseUrl + req.url);
    next();
  }
}
