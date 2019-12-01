import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
    private readonly envConfig: Record<string, string>;

    constructor(filePath: string) {
        try {
            if (fs.existsSync(filePath)) {
                this.envConfig = dotenv.parse(fs.readFileSync(filePath));
            } else {
                this.envConfig = dotenv.parse(fs.readFileSync('.env'));
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    get(key: string): string {
        return this.envConfig[key];
    }
}
