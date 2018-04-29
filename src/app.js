import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';
import './app.scss';
import './bg-img.jpg';

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

console.log('Hello World - Simple Webpack config');