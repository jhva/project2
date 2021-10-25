import React from 'react';

import './App.css';
import LoginButton from './components/Button/LoginButton';
import PatentButton from './components/Button/PatentButton';
import PrecedencButton from './components/Button/PrecedencButton';
import InsertSearch from './components/InsertSearch';
import TextSearch from './components/TextSearch';
import NumberSearch from './components/NumberSearch';
const App = () => {
  return (
    <>
      <div className="app-title">Tanalysis</div>
      <PatentButton/>
      <InsertSearch />
      <LoginButton />
      <PrecedencButton/>
      <TextSearch/>
      <NumberSearch/>
    </>
  );
};



export default App;
