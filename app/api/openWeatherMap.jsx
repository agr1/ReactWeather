//load in axios
const axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=d7fdeddaf3b597776b1dda483938513c&units=imperial';

module.exports = {
  getTemp: function (location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl =  `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      }
      else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
