import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './testData';
import DataList from './DataList';
import Search from './Search';

class App extends Component {

  constructor() {
    super();
    this.state = {
      allData : data,
      filteredData : data,
      currentFilters : {
        country : '',
        capital : '',
        region : ''
      }
    };
  }

  doFilter(filteredData, filter, filterType) {
    if (filter && filter.length) {
      filteredData = filteredData.filter((entry) => {
        return entry[filterType].toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) > -1;
      });
    }

    return filteredData;
  }

  onChangeHandler(e, filterType) {
    let filter = e.target.value;
    let filteredData = this.doFilter(
      this.state.allData.slice(),
      filterType === 'country' ? filter : this.state.currentFilters.country,
      'country'
    );
    filteredData = this.doFilter(
      filteredData, 
      filterType === 'capital' ? filter : this.state.currentFilters.capital, 
      'capital'
    );
    filteredData = this.doFilter(
      filteredData, 
      filterType === 'region' ? filter : this.state.currentFilters.region, 
      'region'
    );

    this.setState({filteredData : filteredData});

    var currentFilters = {...this.state.currentFilters};
    currentFilters[filterType] = filter;
    this.setState({currentFilters : currentFilters});
  }

  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Capital</th>
              <th>Region</th>
            </tr>
            <Search
              onCountryChange={this.onChangeHandler.bind(this)}
              onCapitalChange={this.onChangeHandler.bind(this)}
              onRegionChange={this.onChangeHandler.bind(this)} />
          </thead>
          <DataList data={this.state.filteredData} />
        </table>
      </div>
    );
  }
}

export default App;
