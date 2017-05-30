'use strict';

/**
 * include packages
 */
import * as express from 'express';
import * as _ from 'lodash';

/**
 * include modules
 */
import { ILoggerService, ConsoleLoggerService } from '../services/logger_service';
import { HttpStatusCode } from '../utils/http_status_code';
import ErrorsDefine from '../helpers/errors_define';
import { ApiResponse, ApiErrorMessage } from '../utils/api_reponse';

/**
 * BaseController
 */
export abstract class BaseController {
    protected router: express.Router;
    protected logger: ILoggerService;
    protected httpStatusCode = HttpStatusCode;
    protected errorsDeinde = ErrorsDefine;

    constructor() {
        this.router = express.Router();
        this.logger = new ConsoleLoggerService();
    }

    public abstract routers(): express.Router;

    public asSuccessNotData(req: express.Request, res: express.Response, next: express.NextFunction, status?: HttpStatusCode): express.Response {
        return this.asSuccess(req, res, next, null, status);
    }

    public asSuccess(req: express.Request, res: express.Response, next: express.NextFunction, data: any, status: HttpStatusCode = HttpStatusCode.OK): express.Response {
        let apiResponse = new ApiResponse();

        if(!_.isObject(data)){
            apiResponse.data = data;
        }
        else if(_.isArray(data)){
            apiResponse.data = this.handleReturnArrayData(data);
        } else {
            apiResponse.data = this.handleReturnObjectData(data);
        }
    
        return res.status(status).json(apiResponse);
    }

    public asError(req: express.Request, res: express.Response, next: express.NextFunction, apiErrorMessage: ApiErrorMessage, status: HttpStatusCode = HttpStatusCode.BadRequest): express.Response {
        let apiErrorMessages = [apiErrorMessage];

        return this.asErrorWithListError(req, res, next, apiErrorMessages, status);
    }

    public asErrorWithException(req: express.Request, res: express.Response, next: express.NextFunction, exception: any, status: HttpStatusCode = HttpStatusCode.InternalServerError): express.Response {
        let apiErrorMessages = [this.errorsDeinde.errorException(exception)];

        return this.asErrorWithListError(req, res, next, apiErrorMessages, status);
    }

    public asErrorWithValidator(req: express.Request, res: express.Response, next: express.NextFunction, validatorErrors: any[], status: HttpStatusCode = HttpStatusCode.InternalServerError): express.Response {
        let apiErrorMessages: ApiErrorMessage[] = [];

        try {
            _(validatorErrors).forEach((data) => {
                apiErrorMessages.push(data.msg);
            });
        } catch (ex) {
            apiErrorMessages = validatorErrors;
        }

        return this.asErrorWithListError(req, res, next, apiErrorMessages, status);
    }

    public asErrorWithListError(req: express.Request, res: express.Response, next: express.NextFunction, apiErrorMessages: ApiErrorMessage[], status: HttpStatusCode = HttpStatusCode.BadRequest): express.Response {
        let apiResponse = new ApiResponse();

        apiResponse.errors = apiErrorMessages;
        apiResponse.requestBody = req.body || null;
        apiResponse.requestUrl = req.originalUrl || '';

        this.logger.error(apiResponse);

        return res.status(status).json(apiResponse);
    }

    protected handleReturnObjectData(data) {
        let result: any;

        result = this.onHandleReturnData(data);

        return result;
    }

    protected handleReturnArrayData(data) {
        let result: any = [];

        _.forEach(data, (item: any) => {
            result.push(this.onHandleReturnData(item));
        });

        return result;
    }

    protected onHandleReturnData(data){
        let result: any;

        result = _.omit(data, ['_id']);
        result.id = data._id;

        return result;
    }
}