'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * LoggerServiceBase
 */
var LoggerServiceBase = (function () {
    function LoggerServiceBase() {
    }
    return LoggerServiceBase;
}());
/**
 * ConsoleLoggerService
 */
var ConsoleLoggerService = (function (_super) {
    __extends(ConsoleLoggerService, _super);
    function ConsoleLoggerService() {
        return _super.call(this) || this;
    }
    ConsoleLoggerService.prototype.info = function (data) {
        console.info(data);
    };
    ConsoleLoggerService.prototype.error = function (data) {
        console.error(data);
    };
    return ConsoleLoggerService;
}(LoggerServiceBase));
exports.ConsoleLoggerService = ConsoleLoggerService;
//# sourceMappingURL=logger_service.js.map