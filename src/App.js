import React from 'react';
import './App.css';
import { Footer } from './componets/Footer';
import { Header } from './componets/Header';
import { Home } from './componets/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { SearchPage } from './componets/SearchPage';

export const App = ()=>{
  return(
    <div className="app">
    <Router>
      <Header/>
      <Switch>
        <Route path="/search" component={ SearchPage }/>
        <Route path="/" component={ Home }/>
      </Switch>
      <Footer/>
    </Router>
    </div>
  )
}
