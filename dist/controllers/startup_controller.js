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
var moment = require("moment");
/**
 * include modules
 */
var base_controller_1 = require("./base_controller");
/**
 * UserApiController
 */
var StartupController = (function (_super) {
    __extends(StartupController, _super);
    function StartupController() {
        var _this = _super.call(this) || this;
        _this.pingServer = function (req, res, next) {
            var responseData = {
                dateTime: moment.utc().toISOString()
            };
            return _this.asSuccess(req, res, next, responseData);
        };
        _this.setupDatabase = function (req, res, next) {
            return _this.asSuccess(req, res, next, 'setup databae');
        };
        _this.test = function (req, res, next) {
            return _this.asSuccess(req, res, next, 'test');
        };
        return _this;
    }
    StartupController.prototype.routers = function () {
        this.router.get('/', this.pingServer);
        this.router.get('/database', this.setupDatabase);
        this.router.get('/test', this.test);
        return this.router;
    };
    return StartupController;
}(base_controller_1.BaseController));
exports.default = StartupController;
//# sourceMappingURL=startup_controller.js.map