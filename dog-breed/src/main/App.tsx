
import Footer from '../templates/Footer';
import Main from './Main';
import './App.css';
import User from '../hooks/User';
import Header from '../templates/Header';
import { render } from '@testing-library/react';
import { useEffect, useState } from 'react';



function App() {

  const { getToken, setToken,  getTitle, setTitle } = User();
  
  
  return (

      <div className="App">
        <header className="App-header">
          <Header title={ getTitle() }  />
        </header>
        
        <div className="App-content">
        <Main  />
        </div>
        <Footer/>
      </div>

    
  );
}

export default App;
