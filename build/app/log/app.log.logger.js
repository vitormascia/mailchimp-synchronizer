import winston from "winston";
import { LogLevelColors } from "../../ts/index.js";
class Logger {
    logger;
    constructor() {
        this.logger = winston;
    }
    create() {
        const timestampConfig = { format: "MM-DD-YYYY HH:mm:ss" };
        const colorizeConfig = { all: true };
        const metadaConfig = { fillExcept: ["message", "level", "timestamp", "label"] };
        const format = this.logger.format.combine(this.logger.format.timestamp(timestampConfig), this.logger.format(function (info) {
            info.level = info.level.toUpperCase();
            return info;
        })(), this.logger.format.colorize(colorizeConfig), this.logger.format.metadata(metadaConfig), this.logger.format.printf(function ({ level, message, timestamp, metadata }) {
            return `---------------------------------------------------\n< ${timestamp} > [${level}]: ${message}\n${JSON.stringify(metadata, null, 2)}`;
        }));
        const colors = {
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
//# sourceMappingURL=app.log.logger.js.map