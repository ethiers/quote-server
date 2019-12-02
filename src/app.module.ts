import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {QuotesModule} from './quotes/quotes.module';
import {LoggerMiddleware} from './shared/middleware/logger.middleware';
import {ConfigModule} from './config/config.module';
import {ConfigService} from './config/config.service';

@Module({

    imports: [MongooseModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => {
            console.log('MONGO_URI=', process.env.MONGO_URI);
            return ({
                uri: process.env.MONGO_URI || configService.get('MONGO_URI'),
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            });
        },
        inject: [ConfigService],
    }), QuotesModule, ConfigModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(LoggerMiddleware).forRoutes('quotes');
    }
}
