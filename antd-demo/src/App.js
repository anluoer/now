import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import { Icon } from 'antd';
import CommonHeader from './components/CommonHeader';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './page/Home';
import Student from './page/Student.js';
class App extends Component {
  render() {
    return (
      <Router><div className="App">
        <div className="Nav">
          <Nav></Nav>
        </div>
        <div className="header-box">
          <CommonHeader></CommonHeader>
          <Route path="/home" component={Home}></Route>
          <Route path="/student" component={Student}></Route>
        </div>
      </div></Router>
      
    );
  }
}

export default App;