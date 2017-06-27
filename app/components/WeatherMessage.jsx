var React = require('react');



var WeatherMessage = ({temp, location}) => {

  return(
      <div>
        <h4 className="text-center">Weather in {location} is {temp}!</h4>
      </div>
  );
};

module.exports = WeatherMessage;
