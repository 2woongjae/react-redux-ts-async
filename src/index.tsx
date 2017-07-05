import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ageApp} from './reducer';
import AppContainer from './App';

import './index.css';

// yarn add redux @types/redux
import {createStore} from 'redux';
// yarn add react-redux @types/react-redux
import {Provider} from 'react-redux';

// 스토어 만들기
const store = createStore<{ age: number; }>(ageApp);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);