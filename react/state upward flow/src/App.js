import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import Calculator from './Calculator';

class App extends Component{
  render(){
    return(
      <Calculator />
    );
  }
}

export default hot(module)(App);