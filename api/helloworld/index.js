(function (){
    'use strict';

    var express   = require("express")
      , endpoints = require("../endpoints")
      , helpers   = require("../../helpers")
      , app       = express()

    app.get("/helloworld", function(req, res, next) {
      helpers.simpleHttpRequest(endpoints.helloWorldUrl, res, next);
    });

    module.exports = app;
}());
