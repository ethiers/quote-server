import {Module} from '@nestjs/common';
import {ConfigService} from './config.service';

@Module({
    providers: [
        {
            provide: ConfigService,
            useValue: new ConfigService((process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? '.env.prod' : '.env'),
        },
    ],
    exports: [ConfigService],
})
export class ConfigModule {
}
