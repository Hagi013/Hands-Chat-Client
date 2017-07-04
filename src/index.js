import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { routes, RouteWithSubRoutes} from './route/routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { fetchAllChannels } from './actions/index'
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render((
      <Router>
        <Provider store={store}>
        <App />
        </Provider>
      </Router>
  ),
  document.getElementById('root'));
registerServiceWorker();
