import React, { useState, components } from 'react';
import '../App.css';


const TextSearch = () => {
  const [message, setMessage] = useState(
    '특허번호 / 공개번호 / 결과번호를 입력하세요',
  );

  const onClickEnter = () =>
    setMessage('특허번호 / 공개번호 / 결과번호를 입력하세요.');
  const onClickLeave = () =>
    setMessage('여기에 기술을 설명하는 텍스트를 입력하세요.');

 
  return (
    <div>
      <span className="app-number" onClick={onClickEnter}>
        <a href="#" type="btn">
          번호검색
        </a>
      </span>
      <span className="app-text02" onClick={onClickLeave}>
        <a href="#" type="btn">
          텍스트 검색
        </a>
      </span>

      <input
        className="app-b"
        placeholder={message}
        name="searchKeyword"
        
      />
      {/* {visible && <p>카테고리별 텍스트입력</p>} */}
    </div>
  );
};



export default TextSearch;
