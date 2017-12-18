import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import React, { Component } from 'react';


import Application from './components/Application';

import scoreMiddleware from './lib/scoreMiddleware';
import { scoreReducer, roundsReducer } from './reducers';

const reducers = {
  score: scoreReducer,
  rounds: roundsReducer
};
const middlewares = [
  scoreMiddleware
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);

const vdom = (
  <Provider store={store}>
    <Application />
  </Provider>
);

render(vdom, document.getElementById('react-root'));
