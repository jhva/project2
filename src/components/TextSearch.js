import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../App.css';
import setting from './setting';


class TextSearch extends Component {
  state = {
    message: '특허번호 / 공개번호 / 결과번호를 입력하세요',
  };

  onClickEnter = () =>
    this.setState({ message: '특허번호 / 공개번호 / 결과번호를 입력하세요' });
  onClickLeave = () =>
    this.setState({ message: '여기에 기술을 설명하는 텍스트를 입력하세요.' });

  constructor(props) {
    super(props);
    
  }
  
  handleTextOn() {
    this.setState({ isTextIn: true });
  }
  handleTextOff() {
    this.setState({ isTextIn: false });
  }

  render() {
    const { message } = this.state;

    return (
      <div>
        <span className="app-number" onClick={this.onClickEnter}>
          <a href="#" type="btn">
            번호검색
          </a>
        </span>

        <span className="app-text02" onClick={this.onClickLeave}>
          <a href="#" type="btn">
            텍스트 검색
          </a>
        </span>

        <input className="app-b" placeholder={message} />
      </div>
    );
  }
}

export default TextSearch;
