var request = require('request');

const weatherURL = 'https://weatherdbi.herokuapp.com/data/weather/';

let weather = {
  measure: function(req, res){
    request(weatherURL + req.params.city, function(error, response, body){
      if(!error && response.statusCode == 200) {
        response = JSON.parse(body);
        res.send(response)
      } else {
        console.log(response.statusCode + response.body);
        res.send({weather: 'error'})
      }
    });
  }
};

module.exports = weather;