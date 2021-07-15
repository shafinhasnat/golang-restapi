import React, { useEffect } from 'react';import Navbar from './Navbar';
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import {Route, Switch} from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from 'react';
function App() {
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    const token = Cookies.get("jwt");
    console.log("--->",token)
    if (!!token) {
      setAuth(true)
    }
  }, [])
  return (
    <div className="container">
      <Navbar auth={auth}/>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" component={() => <Home auth={auth} />} />
      </Switch>
    </div>
  );
}

export default App;
