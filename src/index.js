// react libraries
import React from 'react';
import ReactDOM from 'react-dom';

// third-party libraries
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// actions
import { addUser } from './actions';

// styles
import './index.css';

// component
import App from './App';

// reducer
import chat from './reducers';

const store = createStore(chat);

store.dispatch(addUser('Phemi'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
