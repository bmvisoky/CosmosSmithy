import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
const title = React.createElement(
    'h1',
    {id: 'title', className: 'header'},
    'Cosmos Smithy'
)

ReactDOM.render(
    App,
    document.getElementById('root')
)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
