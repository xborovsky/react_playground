import React from 'react';
import Loading from '../Loading';
import WeatherIcons from 'react-weathericons';
import { getIcon } from '../utils/icons-translator';

const WeatherListItem = ({weather, dayName}) =>
    <div className="weather-list-item">
        {(weather &&
            <div>
                <div className="day-name">{dayName.short}</div>
                <div className="weather-list-item-main">
                    <div className="weather-list-item-main-weather">
                        <WeatherIcons name={getIcon(weather.weather[0].id)} size="2x" />
                        <div className="temp">{Math.round(weather.main ? weather.main.temp : weather.temp.day)}</div>
                    </div>
                    <div className="weather-list-item-main-description">
                        <div className="description">{weather.weather[0].description}</div>
                    </div>
                </div>
                <div className="weather-list-item-bottom">
                    <span className="temp small">min: {Math.round(weather.main ? weather.main.temp_min : weather.temp.min)}</span>
                    <span className="temp small">max: {Math.round(weather.main ? weather.main.temp_max : weather.temp.max)}</span>
                </div>
            </div>
        ) || <Loading />}
    </div>

export default WeatherListItem;