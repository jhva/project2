import React, { Component,useState } from 'react';

import LoginButton from './components/Button/LoginButton';
import PatentButton from './components/Button/PatentButton';
import PrecedencButton from './components/Button/PrecedencButton';
import CateGory from './components/Category/Category';
import SearchBar from './components/Searchlist/SearchBar';

import TextSearch from './components/Searchlist/TextSearch';
class App extends React.Component {
  state = {
    
    data: [
      {
        name: 'US8046721B2',
        title:
          '-Unlocking a device by performing gestures on an unlolock image.',
      },
      {
        name: 'GB804672A',
        title: '-Fluid pressure braking apparetus having a deadman device.',
      },
      { name: 'US804672A', title: '-Cracker-can-holding device.' },
    ],
    keyword: '',
    results: [],
  };

  matchName = (name, keyword) => {
    var keyLen = keyword.length;
    name = name.toLowerCase().substring(0, keyLen);
    if (keyword == '') return false;
    return name == keyword.toLowerCase();
  };
  updateField = (field, value, update = true) => {
    if (update) this.onSearch(value);
    this.setState({ [field]: value });
  };
  onSearch = (text) => {
    let { data } = this.state;
    //check to see if we found a match, if so, add it to results
    var results = data.filter(
      (item) => true == this.matchName(item.name, text),
    );
    //update state changes
    this.setState({ results });
  };
  render() {
    let { results, keyword } = this.state;

    return (
      <>
       <div className="container">
     <div className="app-title">Tanalysis</div>
        <span className="app-number" >
          <a href="#" type="btn">
            번호검색
          </a>
        </span>
        <span className="app-text02" >
          <a href="#" type="btn">
            텍스트 검색
          </a>
          
          </span>
          
          </div>
        <SearchBar
          
          results={results}
          keyword={keyword}
          updateField={this.updateField}
        />
      </>
    );
  }
}

export default App;
