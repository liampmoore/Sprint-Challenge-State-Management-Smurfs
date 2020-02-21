import React, { Component } from "react";


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";

import {smurfReducer as reducer} from '../reducers/smurfReducer'

//Components
import SmurfList from './smurfList';

import "./App.css";



const store = createStore(reducer, applyMiddleware(thunk));


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        
        <SmurfList />
      </div>
      </Provider>
    );
  }
}

export default App;
