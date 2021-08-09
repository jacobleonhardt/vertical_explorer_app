import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Signup from './components/Signup'
import { restoreUser } from '../src/store/session'
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)

  useEffect( async () => {
    await dispatch(restoreUser())
    setLoaded(true)
  }, [dispatch])

  return (
    loaded && (
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
    )
  );
}

export default App;
