import React from 'react';
import logo from './logo.svg';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import BookInfoPage from './components/BookInfoPage';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact={true} component={LoginPage} />
        <Route path="/book-info" component={BookInfoPage} />
        <Route
          // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
