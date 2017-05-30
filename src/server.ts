'use strict';

/**
 * include packages
 */
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import expressValidator = require('express-validator');

/**
 * include modules
 */
import Config from './helpers/config'
import StartupController from './controllers/startup_controller';

export class Server {
  public app: express.Application;
  public port = Config.port || process.env.PORT;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.api();
    this.handleError();
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log('Express server listening on port ' + this.port);
    });
  }

  public api() {
    this.app.get('', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send(`Server <b> ${Config.name} (${Config.env}) </b> ready!`);
    });
  }

  public config() {
    this.app.use(morgan('dev'));
    this.app.set('view engine', 'ejs');
    this.app.use('/assets', express.static(path.resolve('assets')));
    this.app.use('/node_modules', express.static(path.resolve('node_modules')));
    
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));
    this.app.use(expressValidator());
  }

  private routes() {
    //router apis
    this.app.use('/api', new StartupController().routers());
  }

  private handleError() {
    this.app.use((req, res, next) => {
      var errorReponse = {
        errorCode: 9997,
        errorMessage: 'Not Found URL',
        status: 404
      };
      next(errorReponse);
    });

    this.app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      var errorReponse = {
        data: null,
        errors: [{
          errorCode: error.errorCode || 9999,
          errorMessage: error.errorMessage || error || 'Server can not handler this error. Please contact to admin!'
        }],
        requestBody: req.body || null,
        requestUrl: req.originalUrl || ''
      };

      res.status(error.status || 500).json(errorReponse);
    });
  }

}