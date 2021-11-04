import React from 'react';
import { useState } from 'react';

import '../Category/Category.css'
import SearchBar from '../Searchlist/SearchBar';
function Category() {
  return (
    
    <div>
      <input className="zz" placeholder="여기에 제 1 특징구성의 설명을 입력하세요."/>;
      <input placeholder="여기에 제 2 특징구성의 설명을 입력하세요." />;
      <input placeholder="여기에 제 1 종래구성의 설명을 입력하세요 " />;
      <input placeholder="여기에 제 2 종래구성의 설명을 입력하세요" />;
      
    </div>

    
  );
}

export default Category;
