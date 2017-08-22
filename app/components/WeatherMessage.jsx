const React = require('react');

const WeatherMessage = ({temp,location}) => {
    return(
      <div>
        <h3 className="text-center">It is {temp} in {location}!</h3>
      </div>
    );

}

module.exports = WeatherMessage;
