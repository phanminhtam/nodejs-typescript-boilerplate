'use strict';

/**
 * LoggerService
 */
export interface ILoggerService {
    info(data: any): void;
    error(data: any): void;
}

/**
 * LoggerServiceBase
 */
abstract class LoggerServiceBase implements ILoggerService {
    constructor() {
    }
    public abstract info(data: any): void;
    public abstract error(data: any): void;
}

/**
 * ConsoleLoggerService
 */
export class ConsoleLoggerService extends LoggerServiceBase {
    constructor() {
        super();
    }

    public info(data: any): void {
        console.info(data);
    }

    public error(data: any): void {
        console.error(data);
    }
}