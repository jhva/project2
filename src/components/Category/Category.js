import React from 'react';
import { useState } from 'react';

import '../Searchlist/SearchBar.css';
import SearchBar from '../Searchlist/SearchBar';
class Category extends React.Component {
  render() {
    return (
      <>
        <div className="engin">기술의 특징</div>

        <input
          className="input1"
          placeholder="여기에 제 1 특징구성의 설명을 입력하세요."
        />

        <input
          className="input2"
          placeholder="여기에 제 2 특징구성의 설명을 입력하세요."
        />
        <div className="ordinance">종례구성</div>

        <input
          className="input3"
          placeholder="여기에 제 1 종래구성의 설명을 입력하세요 "
        />

        <input
          className="input4"
          placeholder="여기에 제 2 종래구성의 설명을 입력하세요"
        />
        <a href="./Searchbar" className="allText" style={{color:"black"}}>전체 텍스트 입력</a>
      </>
    );
  }
}
export default Category;
