import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import { Router, Route, hashHistory  } from 'react-router'


const store = configureStore();

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
),document.getElementById('app'))
