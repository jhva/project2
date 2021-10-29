import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../src/App.css';
import PatentButton from './components/Button/PatentButton'
import LoginButton from './components/Button/LoginButton';
import TextSearch from './components/Searchlist/TextSearch';
import PrecedencButton from './components/Button/PrecedencButton'
import SearchBar from './components/Searchlist/SearchBar';




ReactDOM.render(
  <React.StrictMode>
    <App/>
    <PatentButton/>
      <TextSearch/>
      <LoginButton />
      <PrecedencButton/>
    
      
      

  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
