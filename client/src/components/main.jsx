const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./App');

window.onload = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
}
