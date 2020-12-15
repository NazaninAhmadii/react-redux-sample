import React, { Component } from 'react';
import Pateints from './componentes/Pateints';
import Countries from './componentes/Countries';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Pateints />
          <Countries />
        </div>
      </Provider>
    );
  }
}

export default App;
