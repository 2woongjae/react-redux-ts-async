import * as React from 'react';
import './App.css';

import {addAge, startGithubApi, errorGithubApi, endGithubApi} from './action';
import * as ReactRedux from 'react-redux';

// yarn add superagent @types/superagent
import * as request from 'superagent';

const logo = require('./logo.svg');

// mapStateToProps 의 리턴 형태로 지정
interface AppProps {
  age: number;
}

const App: React.SFC<AppProps & ReactRedux.DispatchProp<{}>> = (props) => {
  async function getCountFromGithub(): Promise<void> {
    const dispatch: ReactRedux.Dispatch<{}> = props.dispatch;
    dispatch(startGithubApi());
    let res = null;
    try {
      res = await request.get('https://api.github.com/users');
    } catch (e) {
      dispatch(errorGithubApi());
      return;
    }
    const age = JSON.parse(res.text).length;
    dispatch(endGithubApi(age));
    return;
  }
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        나이가 {props.age}
        <button onClick={() => props.dispatch(addAge())}>한해가 지났다.</button>
        <button onClick={() => getCountFromGithub()}>깃헙 API 비동기 호출</button>
      </p>
    </div>
  );
};

const { connect } = ReactRedux;

const mapStateToProps = (state: { age: number; }) => {
  return {
    age: state.age
  };
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
