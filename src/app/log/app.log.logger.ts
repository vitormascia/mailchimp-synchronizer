import winston, { config as WinstonConfig, Logform, Logger as WinstonLogger } from "winston";

import { ILogger, LogLevelColors, TWinstonLogger } from "../../ts/index.js";

class Logger implements ILogger<TWinstonLogger, WinstonLogger> {
    logger: TWinstonLogger;

    constructor() {
        this.logger = winston;
    }

    public create(): WinstonLogger {
        const timestampConfig: Logform.TimestampOptions = { format: "MM-DD-YYYY HH:mm:ss" };
        const colorizeConfig: Logform.ColorizeOptions = { all: true };
        const metadaConfig: Logform.MetadataOptions = { fillExcept: ["message", "level", "timestamp", "label"] };

        const format = this.logger.format.combine(
            this.logger.format.timestamp(timestampConfig),
            this.logger.format(function (info) {
                info.level = info.level.toUpperCase();
                return info;
            })(),
            this.logger.format.colorize(colorizeConfig),
            this.logger.format.metadata(metadaConfig),
            this.logger.format.printf(function ({ level, message, timestamp, metadata }) {
                return `---------------------------------------------------\n< ${timestamp} > [${level}]: ${message}\n${JSON.stringify(metadata, null, 2)}`;
            }),
        );

        const colors: WinstonConfig.AbstractConfigSetColors = {
            debug: LogLevelColors.DEBUG,
            info: LogLevelColors.INFO,
            warn: LogLevelColors.WARN,
            error: LogLevelColors.ERROR,
        };
        this.logger.addColors(colors);

        const transports = [new this.logger.transports.Console({ handleExceptions: true, level: "debug" })];

        return this.logger.createLogger({
            format,
            transports,
        });
    }
}

const _logger = new Logger();
const logger = _logger.create();

export default logger;
