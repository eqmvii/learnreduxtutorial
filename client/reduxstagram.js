import React from 'react'; // no initial pathing means coming from node_modules

import { render } from 'react-dom';

// import css - no need to link in html
import css from './styles/style.styl';

//import Components
import App from './components/app.js';
import Single from './components/Single.js';
import PhotoGrid from './components/PhotoGrid.js';

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store.js';
// curly brackets for named export

//IndexComponent is for the blank / state.
const router = (
  <Provider store ={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>

  </Provider>


);

render(router, document.getElementById('root'));
