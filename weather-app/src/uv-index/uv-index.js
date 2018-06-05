import React, { Component } from 'react';
import { getCurrentUvIndex, getUvIndexForecast } from '../weather-service';
import Loading from '../Loading';
import UvIndexCalendar from './uv-calendar';
import { getDayNamesArrayFromToday } from '../utils/calendar.util';

class UvIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUvIndex : null,
            forecastUvIndex : null
        };
    }

    componentDidMount() {
        const { position } = this.props;
        if (position) {
            getCurrentUvIndex(position.coords.latitude, position.coords.longitude).then((res) => this.setState({currentUvIndex : res.data}));
            getUvIndexForecast(position.coords.latitude, position.coords.longitude).then((res) => this.setState({forecastUvIndex : res.data}));
        }
    }

    render() {
        let circleStyle = {
            stroke: 'white',
            animation: 'ring-1 0.483046s linear 1 forwards'
        };
        let dayNames = getDayNamesArrayFromToday(6);

        return (
            <div>
                {this.state.currentUvIndex ?
                    <svg viewBox="0 0 100 100">
                        <defs>
                            <mask id="ring" style={{strokeDasharray: (this.state.currentUvIndex.value * 269 / 10) + ' 314'}}>
                            <circle r="44" cx="50" cy="50" id="ring-value" className="ring" transform="rotate(-85.3, 50, 50)" style={circleStyle}></circle>
                            </mask>
                            <linearGradient id="gradient-q1" x1="0.0" y1="0.0" x2="0.9" y2="0.9">
                            <stop offset="0" stopColor="#a2c80e"></stop>
                            <stop offset="1" stopColor="#c1cb09"></stop>
                            </linearGradient>
                            <linearGradient id="gradient-q2" x1="0.9" y1="0.0" x2="0.0" y2="0.9">
                            <stop offset="0" stopColor="#c1cb09"></stop>
                            <stop offset="1" stopColor="#ff9900"></stop>
                            </linearGradient>
                            <linearGradient id="gradient-q3" x1="0.9" y1="0.9" x2="0.0" y2="0.0">
                            <stop offset="0" stopColor="#ff9900"></stop>
                            <stop offset="1" stopColor="#ff3100"></stop>
                            </linearGradient>
                            <linearGradient id="gradient-q4" x1="0.0" y1="0.9" x2="0.9" y2="0.0">
                            <stop offset="0" stopColor="#ff3100"></stop>
                            <stop offset="1" stopColor="#9565ea"></stop>
                            </linearGradient>
                        </defs>
                        <circle r="44" cx="50" cy="50" className="ring-background"></circle>
                        <g className="ring-rainbow">
                            <rect x="50" y="50" width="51" height="51" fill="url(#gradient-q2)" mask="url(#ring)"></rect>
                            <rect x="00" y="50" width="51" height="51" fill="url(#gradient-q3)" mask="url(#ring)"></rect>
                            <rect x="00" y="00" width="51" height="51" fill="url(#gradient-q4)" mask="url(#ring)"></rect>
                            <rect x="50" y="00" width="51" height="51" fill="url(#gradient-q1)" mask="url(#ring)"></rect>
                        </g>
                        <circle r="44" cx="50" cy="50" id="ring-old" className="ring" transform="rotate(-85.3, 50, 50)" style={circleStyle}></circle>
                        <text x="50" y="53">
                            <tspan id="text-value">{this.state.currentUvIndex.value}</tspan>
                        </text>
                    </svg> : <Loading />}
                {this.state.forecastUvIndex ?
                    <UvIndexCalendar data={this.state.forecastUvIndex} dayNames={dayNames} /> : <Loading />}
            </div>
        );
    }
}

export default UvIndex;