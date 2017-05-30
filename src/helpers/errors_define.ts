'use strict';

/**
 * include modules
 */
import {ApiErrorMessage} from '../utils/api_reponse';

/**
 * ErrorsDefine
 */
export default class  ErrorsDefine {
    //
    public static errorDefault(message: string): ApiErrorMessage {
        return new ApiErrorMessage(9999, message);
    }
    public static errorException(exception: any): ApiErrorMessage {
        return new ApiErrorMessage(9998, exception.message || exception, exception.stack || null);
    }
    public static errorNotFound: ApiErrorMessage = new ApiErrorMessage(9997, 'Not found method');
    
    //Authentication's errors: 20xx
    public static tokenFail: ApiErrorMessage = new ApiErrorMessage(2000, 'Failed to authenticate token');
    public static clientTokenRequired: ApiErrorMessage = new ApiErrorMessage(2001, 'Client token is required');
    public static tokenInvalid: ApiErrorMessage = new ApiErrorMessage(2002, 'Token is invalid');
    public static secretFail: ApiErrorMessage = new ApiErrorMessage(2003, 'secret is fail');
    public static facebookAppIdNotFound: ApiErrorMessage = new ApiErrorMessage(2004, 'Facebook app Id is not found');
    public static tokenExternalRequired: ApiErrorMessage = new ApiErrorMessage(2005, 'External token is required');
    public static providedNotMatch: ApiErrorMessage = new ApiErrorMessage(2006, 'Provider not match');
    public static providerRequired: ApiErrorMessage = new ApiErrorMessage(2007, 'Provider is required');
    public static userTokenRequired: ApiErrorMessage = new ApiErrorMessage(2008, 'User token is required');
    
    //User's errors: 21xx
    public static userNotFound: ApiErrorMessage = new ApiErrorMessage(2100, 'User not found');
    public static usernameRequired: ApiErrorMessage = new ApiErrorMessage(2101, 'The username field is required');
    public static passwordRequired: ApiErrorMessage = new ApiErrorMessage(2102, 'The password field is required');
    public static passwordWrong: ApiErrorMessage = new ApiErrorMessage(2103, 'The password field is wrong');
    public static emailRequired: ApiErrorMessage = new ApiErrorMessage(2104, 'The email field is required');
    public static emailInvalid: ApiErrorMessage = new ApiErrorMessage(2105, 'The email is invalid');

    //Client's errors: 22xx
    public static clientNameRequired: ApiErrorMessage = new ApiErrorMessage(2200, 'Client name is required');
    public static scopeRequired: ApiErrorMessage = new ApiErrorMessage(2201, 'Scope field is required');
    public static grantTypeRequired: ApiErrorMessage = new ApiErrorMessage(2202, 'Grant type field is required');
    public static grantTypeInvalid: ApiErrorMessage = new ApiErrorMessage(2203, 'Grant type must is int');
    public static secretRequired: ApiErrorMessage = new ApiErrorMessage(2204, 'Secret is required');
    public static secretWrong: ApiErrorMessage = new ApiErrorMessage(2205, 'The secret field is wrong');
    public static clientNotFound: ApiErrorMessage = new ApiErrorMessage(2206, 'Client not found');
}