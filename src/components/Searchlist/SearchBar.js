import { style } from 'dom-helpers';
import React, { useState } from 'react';
import reactDom from 'react-dom';
import Category from '../Category/Category';
import './SearchBar.css';

const SearchBar = ({ results, keyword, updateField }) => {
  //renders our results using the SearchPreview component

  var updateText = (text) => {
    updateField('keyword', text, false);
    updateField('results', []);
  };

  var renderResults = results.map(({ title, name }, index) => {
    return (
      <SearchPreview
        key={index}
        updateText={updateText}
        index={index}
        title={title}
        name={name}
      />
    );
  });
  const [visible, setVisible] = useState(false);
  const [message, setmessage] = useState(
    '특허번호 / 공개번호 / 결과번호를 입력하세요.',
  );
  
  const onClickEnter = () =>
    setmessage('특허번호 / 공개번호 /결과번호를 입력하세요.');
  const onClickLeave = () =>
    setmessage('여기에 기술을 설명하는 텍스트를 입력하세요.');

  return (
    <div className="container">
      <div className="app-title">Tanalysis</div>
      <span className="app-number">
        <a href="#" type="btn" onClick={onClickEnter}>
          번호검색
        </a>
      </span>
      <span className="app-text02">
        <a href="#" type="btn" onClick={onClickLeave}>
          텍스트 검색
        </a>
      </span>
      <a
        onClick={() => {
          setVisible(!visible);
        }}
        className="category"
      >
        카테고리 별 텍스트 입력
      </a>

      {visible && <Category />}
      
      <input
        className="app-b"
        id="firstSearch"
        placeholder={message}
        value={keyword}
        onChange={(e) => updateField('keyword', e.target.value)}
      />
      {results.length > 0 ? (
        <div className="search-results">{renderResults}</div>
      ) : null}
    </div>
  );
};

//stateless component to render preview results
const SearchPreview = ({ name, title, index, updateText }) => {
  return (
    <div
      onClick={() => updateText(name)}
      className={`search-preview ${index == 0 ? 'start' : ''}`}
    >
      <div className="first">
        <p className="name">{name}</p>
        <p className="sub-header">{title}</p>
      </div>
    </div>
  );
};

export default SearchBar;
