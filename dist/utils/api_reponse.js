'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ApiResponse
 */
var ApiResponse = (function () {
    function ApiResponse() {
        this.data = null;
        this.errors = null;
        this.requestBody = null;
        this.requestUrl = null;
    }
    return ApiResponse;
}());
exports.ApiResponse = ApiResponse;
/**
 * ApiErrorMessage
 */
var ApiErrorMessage = (function () {
    function ApiErrorMessage(errorCode, errorMessage, stack) {
        if (stack === void 0) { stack = null; }
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.stack = stack;
    }
    return ApiErrorMessage;
}());
exports.ApiErrorMessage = ApiErrorMessage;
//# sourceMappingURL=api_reponse.js.map