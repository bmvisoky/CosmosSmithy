import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const title = React.createElement(
    'h1',
    {id: 'title', className: 'header'},
    'Cosmos Smithy'
)

ReactDOM.render(
    title,
    document.getElementById('root')
)
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
