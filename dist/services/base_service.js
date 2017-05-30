'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * include modules
 */
var logger_service_1 = require("../services/logger_service");
/**
 * BaseService
 */
var BaseService = (function () {
    function BaseService() {
        this.logger = new logger_service_1.ConsoleLoggerService();
    }
    return BaseService;
}());
exports.default = BaseService;
//# sourceMappingURL=base_service.js.map