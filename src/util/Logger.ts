import * as winston from "winston";
const pkg = require("../../package.json");

export default class Logger {
    private _logger: any;

    constructor() {
        this._logger = new (winston.Logger)({ transports: [
            new (winston.transports.Console)({
                level: this.logLevel(),
                name: "console-log",
                timestamp: () => { return Date.now(); },
                formatter: (options: any) => { return this.logFormatter(options); }
            })
        ]});
        this._logger.level = this.logLevel();
        this._logger.debug("Logging initialized at DEBUG level.");
    }

    get logger(): any {
        return this._logger;
    }

    private logLevel(): string {
        return process.env.NODE_ENV === "production" ? "info" : "debug";
    }

    private logFormatter(options: any): string {
        const logLine = {
            timestamp: options.timestamp(),
            level: options.level.toUpperCase(),
            program: pkg.name,
            node_id: "TO-DO: Node UUID",
            message: options.message ? options.message : "",
            meta: options.meta && Object.keys(options.meta).length ? "\n\t" + JSON.stringify(options.meta) : ""
        };
        return JSON.stringify(logLine);
    }
}
