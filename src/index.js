import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers"
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import {BrowserRouter} from "react-router-dom";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://rem-rest-api.herokuapp.com/api"

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducers,applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(rootSaga)
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}> <BrowserRouter><App /> </BrowserRouter></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
