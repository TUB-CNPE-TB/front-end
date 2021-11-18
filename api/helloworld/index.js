(function (){
    'use strict';
  
    var express   = require("express")
      , request   = require("request")
      , endpoints = require("../endpoints")
      , helpers   = require("../../helpers")
      , app       = express()
  
    app.get("/helloworld", function(req, res, next) {
      helpers.simpleHttpRequest(endpoints.helloworld, res, next);
    });

    function helloworld(callback) {
      console.log("Requesting helloworld");
      $.ajax({
          url: "helloworld" + id,
          type: "GET",
          success: function (data, textStatus, jqXHR) {
              json = JSON.parse(data);
              if (json.status_code !== 500) {
                  callback(json);
              } else {
                  console.error('Could not get helloworld');
                  return callback("HelloWorld not Available");
              }
          },
          error: function (jqXHR, textStatus, errorThrown) {
              console.error('Error while retrieving helloworld');
              return callback("HelloWorld Threw an Error");
          }
      });
  }
  
    module.exports = app;
  }());