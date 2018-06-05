import React, { Component } from 'react';

import { getCurrentWeather, getForecast } from '../weather-service';
import WeatherListItem from './weather-list-item';
import { getDayNamesArrayFromToday } from '../utils/calendar.util';

class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWeather : null,
            forecast : null
        };
    }

    componentDidMount() {
        const { position } = this.props;
        if (position) {
            getCurrentWeather(position.coords.latitude, position.coords.longitude).then((res) =>
                this.setState({ currentWeather : res.data }));
            getForecast(position.coords.latitude, position.coords.longitude).then((res) => {
                this.setState({ forecast : res.data });
            });
        }
    }

    render() {
        let dayNames = getDayNamesArrayFromToday(6);
        let cnt = 0;
        let {currentWeather, forecast} = this.state;

        return (
            <div className="weather-list">
                <WeatherListItem weather={currentWeather} dayName={dayNames[cnt++]} />
                {forecast &&
                    forecast.list.map((weather, idx) =>
                        <WeatherListItem key={idx} weather={weather} dayName={dayNames[cnt++]} />
                    )
                }
            </div>
        );
    }
}

export default WeatherList;