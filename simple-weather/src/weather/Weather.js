import React from 'react';
import Skycons from 'react-skycons'

const Weather = ({weather}) => {
        return <div className="weather">
            <div className="icon">
                <Skycons 
                    color='black' 
                    icon={weather.icon.toUpperCase().replace(/-/g, '_')}
                    autoplay={true} />
            </div>
            <div>Summary: {weather.description}</div>
            <div>Temperature: {fahrenheitToCelsius(weather.temp).toFixed(2)}</div>
            <div>Humidity: {weather.humidity}</div>
            <div>Wind speed: {weather.wind}</div>
        </div>
};

const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) / 1.8;
};

export default Weather;