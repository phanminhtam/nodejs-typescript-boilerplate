'use strict';

/**
 * ApiResponse
 */
export class ApiResponse {
    public data: any;
    public errors: ApiErrorMessage[];
    public requestBody: string;
    public requestUrl: string;

    constructor() {
        this.data = null;
        this.errors = null;
        this.requestBody  = null;
        this.requestUrl = null;
    }
}

/**
 * ApiErrorMessage
 */
export class ApiErrorMessage {
    public errorCode: number;
    public errorMessage: string;
    public stack: string;

    constructor(errorCode: number, errorMessage: string, stack: string = null) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.stack = stack;
    }
}