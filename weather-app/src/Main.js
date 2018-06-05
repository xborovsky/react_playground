import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import WeatherList from './weather-list/weather-list';
import UvIndex from './uv-index/uv-index';
import { getCurrentLocation } from './location-service';
import Loading from './Loading';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position : null
        };
    }

    componentDidMount() {
        getCurrentLocation().then((position) => {
            this.setState({position : position});
        }).catch(err => console.error(err));
    }

    render() {
        return(
            <main>
                {this.state.position ?
                    <Switch>
                        <Route exact path='/' render={() => <WeatherList position={this.state.position} />} />
                        <Route path='/uv-index' render={() => <UvIndex position={this.state.position} />} />
                    </Switch>
                    : <Loading />}
            </main>
        );
    }
}

export default Main;