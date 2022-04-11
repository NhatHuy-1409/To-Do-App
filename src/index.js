import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers/rootReducer';
import { createStore } from 'redux';
const store =createStore(rootReducer) 

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

