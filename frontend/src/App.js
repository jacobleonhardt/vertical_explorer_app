import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Signup from './components/Signup'

function App() {
  return (
    <>
      <Navigation />
      <div id="content">
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
          <Signup />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
