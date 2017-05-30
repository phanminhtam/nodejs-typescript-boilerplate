'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * include packages
 */
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var morgan = require("morgan");
var expressValidator = require("express-validator");
/**
 * include modules
 */
var config_1 = require("./helpers/config");
var startup_controller_1 = require("./controllers/startup_controller");
var Server = (function () {
    function Server() {
        this.port = config_1.default.port || process.env.PORT;
        this.app = express();
        this.config();
        this.routes();
        this.api();
        this.handleError();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Express server listening on port ' + _this.port);
        });
    };
    Server.prototype.api = function () {
        this.app.get('', function (req, res, next) {
            res.send('Server ' + config_1.default.name + ' (' + config_1.default.env + ') ready!!!');
        });
    };
    Server.prototype.config = function () {
        this.app.use(morgan('dev'));
        this.app.set('view engine', 'ejs');
        this.app.use('/asset', express.static(path.resolve('assets')));
        this.app.use('/node_modules', express.static(path.resolve('node_modules')));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(expressValidator());
    };
    Server.prototype.routes = function () {
        //router apis
        this.app.use('/api', new startup_controller_1.default().routers());
    };
    Server.prototype.handleError = function () {
        this.app.use(function (req, res, next) {
            var errorReponse = {
                errorCode: 9997,
                errorMessage: 'Not Found URL',
                status: 404
            };
            next(errorReponse);
        });
        this.app.use(function (error, req, res, next) {
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
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map