'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * include modules
 */
var api_reponse_1 = require("../utils/api_reponse");
/**
 * ErrorsDefine
 */
var ErrorsDefine = (function () {
    function ErrorsDefine() {
    }
    //
    ErrorsDefine.errorDefault = function (message) {
        return new api_reponse_1.ApiErrorMessage(9999, message);
    };
    ErrorsDefine.errorException = function (exception) {
        return new api_reponse_1.ApiErrorMessage(9998, exception.message || exception, exception.stack || null);
    };
    return ErrorsDefine;
}());
ErrorsDefine.errorNotFound = new api_reponse_1.ApiErrorMessage(9997, 'Not found method');
//Authentication's errors: 20xx
ErrorsDefine.tokenFail = new api_reponse_1.ApiErrorMessage(2000, 'Failed to authenticate token');
ErrorsDefine.clientTokenRequired = new api_reponse_1.ApiErrorMessage(2001, 'Client token is required');
ErrorsDefine.tokenInvalid = new api_reponse_1.ApiErrorMessage(2002, 'Token is invalid');
ErrorsDefine.secretFail = new api_reponse_1.ApiErrorMessage(2003, 'secret is fail');
ErrorsDefine.facebookAppIdNotFound = new api_reponse_1.ApiErrorMessage(2004, 'Facebook app Id is not found');
ErrorsDefine.tokenExternalRequired = new api_reponse_1.ApiErrorMessage(2005, 'External token is required');
ErrorsDefine.providedNotMatch = new api_reponse_1.ApiErrorMessage(2006, 'Provider not match');
ErrorsDefine.providerRequired = new api_reponse_1.ApiErrorMessage(2007, 'Provider is required');
ErrorsDefine.userTokenRequired = new api_reponse_1.ApiErrorMessage(2008, 'User token is required');
//User's errors: 21xx
ErrorsDefine.userNotFound = new api_reponse_1.ApiErrorMessage(2100, 'User not found');
ErrorsDefine.usernameRequired = new api_reponse_1.ApiErrorMessage(2101, 'The username field is required');
ErrorsDefine.passwordRequired = new api_reponse_1.ApiErrorMessage(2102, 'The password field is required');
ErrorsDefine.passwordWrong = new api_reponse_1.ApiErrorMessage(2103, 'The password field is wrong');
ErrorsDefine.emailRequired = new api_reponse_1.ApiErrorMessage(2104, 'The email field is required');
ErrorsDefine.emailInvalid = new api_reponse_1.ApiErrorMessage(2105, 'The email is invalid');
//Client's errors: 22xx
ErrorsDefine.clientNameRequired = new api_reponse_1.ApiErrorMessage(2200, 'Client name is required');
ErrorsDefine.scopeRequired = new api_reponse_1.ApiErrorMessage(2201, 'Scope field is required');
ErrorsDefine.grantTypeRequired = new api_reponse_1.ApiErrorMessage(2202, 'Grant type field is required');
ErrorsDefine.grantTypeInvalid = new api_reponse_1.ApiErrorMessage(2203, 'Grant type must is int');
ErrorsDefine.secretRequired = new api_reponse_1.ApiErrorMessage(2204, 'Secret is required');
ErrorsDefine.secretWrong = new api_reponse_1.ApiErrorMessage(2205, 'The secret field is wrong');
ErrorsDefine.clientNotFound = new api_reponse_1.ApiErrorMessage(2206, 'Client not found');
exports.default = ErrorsDefine;
//# sourceMappingURL=errors_define.js.map