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
import CoursesDetails from './Components/CoursesDetails/CoursesDetails';

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
          <Router path="/sign_in">
            <SignIn></SignIn>
          </Router>

          <Router path="/sign_up">

          </Router>

          <Router path="/course/datles">
            <CoursesDetails></CoursesDetails>
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
