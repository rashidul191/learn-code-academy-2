import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import NoMatch from './Components/NoMatch/NoMatch';
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <section>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Router path="/home">
            <Home></Home>
          </Router>

          <Router path="/privacy-policy">
            <PrivacyPolicy></PrivacyPolicy>
          </Router>
          <Router path="/signIn">
            <SignIn></SignIn>
          </Router>

          <Router path="*">
            <NoMatch></NoMatch>
          </Router>
        </Switch>
      </Router>

    </section>
  );
}

export default App;
