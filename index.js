'use strict';

var server = require('./dist/server');
var express = require( 'express');
var path = require('path');

var server = server.Server.bootstrap();
server.start();