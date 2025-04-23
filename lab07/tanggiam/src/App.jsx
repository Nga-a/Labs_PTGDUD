import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import CounterUseReducer from './components/CounterUseReducer';
import CounterRedux from './components/CounterRedux';
import CounterToolkit from './components/CounterToolkit';

export default function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: 20 }}>
        <CounterUseReducer />
        <hr />
        <CounterRedux />
        <hr />
        <CounterToolkit />
      </div>
    </Provider>
  );
}