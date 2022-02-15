'use strict';

var properties = require('../package.json')
var distance = require('../service/distance');
var weather = require('../service/weather');

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   getDistance: function(req, res) {
        distance.find(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
    weather: function(req, res) {
        weather.measure(req, res, function(err, weat) {
            if (err)
                res.send(err);
            res.json(weat);
        });
    }

};

module.exports = controllers;