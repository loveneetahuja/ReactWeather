var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?http://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=5f6e66eeb6a376356dc3c99a811af57e';

//5f6e66eeb6a376356dc3c99a811af57e

module.exports={
  getTemp: function(location) {
    var encodeLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

    return axios.get(requestUrl).then(function(res){

      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
