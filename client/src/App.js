import React, { Fragment} from 'react';
import PrivateRoute from './components/routing/privateRoute';

import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home'
import About from './components/pages/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactState from './context/contact/ContactState'
import Authstate from './context/auth/AuthState';

import AlertState from './context/alert/AlertState';
import Alerts from './components/layouts/Alerts'
import Login from './components/auth/Login';
import Register from './components/auth/Register';


import setAuthToken from './utils/setTokenAuth'

import './App.css';

if(localStorage.token) {
  setAuthToken(localStorage.token)
}


const  App  = () =>  {
  return (
    <Authstate>
      <ContactState>
      <AlertState>
          <Router>
          <Fragment>
            <Navbar  title="Track Contact" icon="fas  fa-id-card-alt"/>
                  <div className="container">
                  <Alerts />
                      <Switch>
                      <PrivateRoute exact path='/' component={Home} />
                        <Route exact path="/"  component={Home}/>
                        <Route exact path="/about"  component={About}/>
                        <Route exact path="/register"  component={Register}/>
                        <Route exact path="/login"  component={Login}/>
                      </Switch>
                  </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </Authstate>
  );
}

export default App;
