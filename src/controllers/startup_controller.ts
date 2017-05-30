'use strict';

/**
 * include packages
 */
import { Request, Response, NextFunction, Router } from 'express';
import * as moment from 'moment';

/**
 * include modules
 */
import { BaseController } from './base_controller';

/**
 * UserApiController
 */
export default class StartupController extends BaseController {
    constructor() {
        super();
    }

    public routers(): Router {

        this.router.get('/', this.pingServer);
        this.router.get('/database', this.setupDatabase);
        this.router.get('/test', this.test);

        return this.router;
    }

    private pingServer = (req: Request, res: Response, next: NextFunction) => {
        let responseData = {
            dateTime: moment.utc().toISOString()
        };
        
        return this.asSuccess(req, res, next, responseData);
    }

    private setupDatabase = (req: Request, res: Response, next: NextFunction) => {
        return this.asSuccess(req, res, next, 'setup databae');
    }

    private test = (req: Request, res: Response, next: NextFunction) => {
        return this.asSuccess(req, res, next, 'test');
    }
}