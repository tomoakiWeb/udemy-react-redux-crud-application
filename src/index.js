import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import reducer from './reducer'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)

ReactDOM.render(<App />, document.getElementById('root'));
  <Provider store={store}>
    <App />
  </Provider>,
serviceWorker.unregister();
