import React from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import { BrowserRouter } from 'react-router-dom' 

function App() {
  return (
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
  );
}

export default App;
