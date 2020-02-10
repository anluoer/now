import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import A from './components/A.js'
import B from './components/B.js'
import Home from './components/Home.js'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Jump from "./components/Jump"
function App() {
  return (
    <div className="App">
      
      {/* <hr></hr> */}
        <Router>
          <ul>
            <li><Header title="首页----"></Header></li>
            <li>
              <Jump to="/">用component渲染组件</Jump> 
            </li>
            <li>
              <Jump to="/a">用render渲染组件</Jump>
            </li>
            <li>
              <Jump to="/b">渲染组件</Jump>
            </li>
          </ul>
            <Route path="/a" component={A}></Route>
            <Route  exact path="/" component={Home}></Route>
        </Router>
      <hr></hr>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
