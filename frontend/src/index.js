import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {SERVER_URL} from './constants'
import { ServerResponse } from 'http';

document.title = "RDF-WebApp";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
