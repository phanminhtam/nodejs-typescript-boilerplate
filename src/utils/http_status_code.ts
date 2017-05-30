'use strict';

/**
 * HttpStatusCode
 */
export enum HttpStatusCode{
    //1xx Informational

    
    //2xx Success
    OK = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,

    //3xx Redirection


    //4xx Client Error
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    RequestTimeout = 408,
    Conflict = 409,

    //5xx Server Error
    InternalServerError = 500
    
    
}
