/**
 * NodeJS v10.163
 * Scripts-version 1.1.5
 * 
 * React workspace is initiated using creat-react-app module maintained by Facebook, Inc.
 * https://github.com/facebook/create-react-app
 * 
 * Atomic React Structured is followed
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 * 
 */

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Header from './components/statelessComponents/header'
import Home from './views/home';
import './App.css';


class App extends Component {
  TITLE = 'Covid-19 Dashboard';
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <title>{ this.TITLE }</title>
          </Helmet>
          <Header 
            banner="https://cdn1.iconfinder.com/data/icons/coronavirus-information/128/__coronavirus_corona_virus_genome-512.png"
            title="COVID-19 Dashboard"
          />
          <Route path="/covid-19-dashboard" exact component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
