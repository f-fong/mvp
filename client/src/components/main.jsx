const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./App.js');

window.onload = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
}
