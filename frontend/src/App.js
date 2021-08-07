import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Navigation/index'
import Login from './components/Login';
import Signup from './components/Signup'

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
         <Signup />
        </Route>
      </Switch>
    </>
  );
}

export default App;
