import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js'

class App extends Component {
  render() {
    return (
     <Header text="Styled Components Based" icon="icon-twitter"/>
    );
  }
}

export default App;
