import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

App.defaultProps = {
  text: 'this is the default text',
  cat : 4
}

ReactDOM.render(<App cat={5} text="asdf"/>, document.getElementById('app'))
