import React, { Component } from 'react';
import { render } from 'react-dom';
import BoxList from './BoxList';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <BoxList />
    );
  }
}

render(<App />, document.getElementById('root'));
