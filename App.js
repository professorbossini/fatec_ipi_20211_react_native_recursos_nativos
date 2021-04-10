import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import lugaresReducer from './store/lugares-reducers';
import LugaresNavigator from './navegacao/LugaresNavigator'

const rootReducer = combineReducers ({
  lugares: lugaresReducer
})

const store = createStore (rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <LugaresNavigator />
    </Provider>
  );
}

