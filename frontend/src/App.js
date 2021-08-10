import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup'
import { restoreUser } from '../src/store/session'
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)

  const user = useSelector(state => state.session.user)

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
          <Route path="/" exact>
             {user ? <Profile /> : <Landing />}
            </Route>
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
