import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Table from './Table';
import Button from './Button';
import Loading from './Loading';

const DEFAULT_PAGE = 0;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list : [],
      page : DEFAULT_PAGE,
      query : 'redux',
      isLoading: false,
      sortKey: 'NONE'
    };
  }

  componentDidMount() {
    this.fetchData(this.state.query, this.state.page);
  }

  onSearchChanged(event) {
    const val = event.target.value;
    if (val && val.length) {
      this.fetchData(this.state.query, DEFAULT_PAGE);
    } else {
      this.setState({list : []});
    }
    this.setState({query : val});
  }

  fetchData(query, page) {
    this.setState({isLoading : true});
    fetch(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`)
      .then((result) => result.json())
      .then((data) => {
        let current = this.state.list;
        let newList = [...current, ...data.hits];
        this.setState({list : newList, isLoading : false})
      },
        (error) => {
          console.error('Could not load data', error)
          this.setState({isLoading : false})
        });
    
    this.setState({page : page});
  }

  onSort(sortKey) {
    this.setState({ sortKey });
  }

  render() {
    const { query, list, page, isLoading, sortKey } = this.state;

    return (
      <div className="App">
        <Search value={query} onChange={(e) => this.onSearchChanged(e)}>Search</Search>
        {list && list.length ? <Table list={list} sortKey={sortKey} onSort={(sortKey) => this.onSort(sortKey)} /> : <h3>No data...</h3>}
        <div className="interactions">
          { isLoading ?
            <Loading /> :
            <Button onClick={() => this.fetchData(query, page + 1)}>
              More...
            </Button>
          }
        </div>
      </div>
    );
  }
}

export default App;
