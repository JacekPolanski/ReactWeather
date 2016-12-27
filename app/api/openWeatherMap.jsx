var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=cf310933ded5803bda1a7aa48e665f1e&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (response) {
      if (response.data.cod && response.data.message) {
        throw new Error('Unable to fetch weather.');
      } else {
        return response.data.main.temp;
      }
    }, function (error) {
      throw new Error(error.response.data.message);
    })
  }
};