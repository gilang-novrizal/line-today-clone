import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom"

// setup redux
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import ReduxThunk from "redux-thunk"
import allReducer from "./reducer"
import {composeWithDevTools} from 'redux-devtools-extension'

const globalStore = createStore(allReducer, {}, composeWithDevTools(applyMiddleware(ReduxThunk)))
globalStore.subscribe(()=> console.log("Global Store : ", globalStore.getState()))
ReactDOM.render(
  <Provider store={globalStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
