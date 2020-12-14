import React, { Component } from 'react';
import Pateints from './componentes/Pateints';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Pateints />
        </div>
      </Provider>
    );
  }
}

export default App;
