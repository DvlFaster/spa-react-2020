import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Profile from './pages/Profile';
import Users from './pages/Users';
import Navbar from './components/Navbar';
import FunctionalComponent from './components/FunctionalComponent';

const Layout = props => {
  return(
    <>
      <Navbar></Navbar>
      <div className="container pt-5">
        {props.children}
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/profile">
            <Layout>
              <Profile />
            </Layout>
          </Route>
          <Route path="/users">
            <Layout>
              <Users />
            </Layout>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
