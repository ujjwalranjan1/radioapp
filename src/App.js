import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Menu from './components/Menu';
import Menuright from './components/Menuright';
import Nav from './components/Nav';
import Content from './components/Content';
import Foot from './components/Foot';
// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Link = require("react-router-dom").Link;

class App extends Component {
 
 render() {
  return (
        <div>
    	 <Menu />
    	 <Nav />
        <Content />
        <Menuright />
        <Foot />

     </div>
  );
}
}

export default App;
