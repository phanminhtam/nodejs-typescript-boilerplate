'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * include packages
 */
var express = require("express");
var _ = require("lodash");
/**
 * include modules
 */
var logger_service_1 = require("../services/logger_service");
var http_status_code_1 = require("../utils/http_status_code");
var errors_define_1 = require("../helpers/errors_define");
var api_reponse_1 = require("../utils/api_reponse");
/**
 * BaseController
 */
var BaseController = (function () {
    function BaseController() {
        this.httpStatusCode = http_status_code_1.HttpStatusCode;
        this.errorsDeinde = errors_define_1.default;
        this.router = express.Router();
        this.logger = new logger_service_1.ConsoleLoggerService();
    }
    BaseController.prototype.asSuccessNotData = function (req, res, next, status) {
        return this.asSuccess(req, res, next, null, status);
    };
    BaseController.prototype.asSuccess = function (req, res, next, data, status) {
        if (status === void 0) { status = http_status_code_1.HttpStatusCode.OK; }
        var apiResponse = new api_reponse_1.ApiResponse();
        if (!_.isObject(data)) {
            apiResponse.data = data;
        }
        else if (_.isArray(data)) {
            apiResponse.data = this.handleReturnArrayData(data);
        }
        else {
            apiResponse.data = this.handleReturnObjectData(data);
        }
        return res.status(status).json(apiResponse);
    };
    BaseController.prototype.asError = function (req, res, next, apiErrorMessage, status) {
        if (status === void 0) { status = http_status_code_1.HttpStatusCode.BadRequest; }
        var apiErrorMessages = [apiErrorMessage];
        return this.asErrorWithListError(req, res, next, apiErrorMessages, status);
    };
    BaseController.prototype.asErrorWithException = function (req, res, next, exception, status) {
        if (status === void 0) { status = http_status_code_1.HttpStatusCode.InternalServerError; }
        var apiErrorMessages = [this.errorsDeinde.errorException(exception)];
        return this.asErrorWithListError(req, res, next, apiErrorMessages, status);
    };
    BaseController.prototype.asErrorWithValidator = function (req, res, next, validatorErrors, status) {
        if (status === void 0) { status = http_status_code_1.HttpStatusCode.InternalServerError; }
        var apiErrorMessages = [];
        try {
            _(validatorErrors).forEach(function (data) {
                apiErrorMessages.push(data.msg);
            });
        }
        catch (ex) {
            apiErrorMessages = validatorErrors;
        }
        return this.asErrorWithListError(req, res, next, apiErrorMessages, status);
    };
    BaseController.prototype.asErrorWithListError = function (req, res, next, apiErrorMessages, status) {
        if (status === void 0) { status = http_status_code_1.HttpStatusCode.BadRequest; }
        var apiResponse = new api_reponse_1.ApiResponse();
        apiResponse.errors = apiErrorMessages;
        apiResponse.requestBody = req.body || null;
        apiResponse.requestUrl = req.originalUrl || '';
        this.logger.error(apiResponse);
        return res.status(status).json(apiResponse);
    };
    BaseController.prototype.handleReturnObjectData = function (data) {
        var result;
        result = this.onHandleReturnData(data);
        return result;
    };
    BaseController.prototype.handleReturnArrayData = function (data) {
        var _this = this;
        var result = [];
        _.forEach(data, function (item) {
            result.push(_this.onHandleReturnData(item));
        });
        return result;
    };
    BaseController.prototype.onHandleReturnData = function (data) {
        var result;
        result = _.omit(data, ['_id']);
        result.id = data._id;
        return result;
    };
    return BaseController;
}());
exports.BaseController = BaseController;
//# sourceMappingURL=base_controller.js.map