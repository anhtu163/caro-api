import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
import {createStore}  from 'redux';
// import {BrowseRouter as Router, Route, Switch} from 'react-router-dom';
import myReducers from './reducers/index';

import './index.css';
import Root from './components/Root';

import * as serviceWorker from './serviceWorker';

// container
const store = createStore(myReducers)




ReactDOM.render(
<Root store={store}/>,
 document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
