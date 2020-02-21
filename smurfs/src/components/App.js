import React, { Component } from "react";


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";

import { smurfReducer as reducer } from '../reducers/smurfReducer'


//Styling
import { Grommet, Box, Heading} from 'grommet';

//Components
import SmurfList from './smurfList';
import SmurfForm from './smurfForm';


const theme = {
  global: {
    colors: {
      brand: '#48A3D0',
      focus: '#CCEEFF'
    },
    font: {
      family: 'Roboto',
    },
  },
};

const store = createStore(reducer, applyMiddleware(thunk));


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Grommet theme={theme}>
          <Box flex direction='row' justify='center'>
            <Box width='medium'>
              <Heading>SMURFS! 2.0 W/ Redux</Heading>
              <SmurfForm />
              <SmurfList />
            </Box>
          </Box>
        </Grommet>
      </Provider>
    );
  }
}

export default App;
