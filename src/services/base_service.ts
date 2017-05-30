'use strict';

/**
 * include modules
 */
import { ILoggerService, ConsoleLoggerService } from '../services/logger_service';

/**
 * BaseService
 */
export default class BaseService {
    protected logger: ILoggerService;

    constructor() {
        this.logger = new ConsoleLoggerService();
    }
}