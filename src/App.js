import React from 'react';
import './App.css';
import { Header } from './componets/Header';
import { Home } from './componets/Home';

export const App = ()=>{
  return(
    <div className="app">
      <Header/>
      <Home/>
    </div>
  )
}
