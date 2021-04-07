import React, { createContext, useState } from 'react';
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
import NewAccount from './Components/NewAccount/NewAccount';
import Checkout from './Components/Checkout/Checkout';
import TeConditions from './Components/TeConditions/TeConditions';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UserDasbord from './Components/UserDasbord/UserDasbord';
import MyProfile from './Components/UserDasbord/MyProfile/MyProfile';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h3>Email: {loggedInUser.email}</h3>
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

          <Router path="/terms-of-service">
            <TeConditions></TeConditions>
          </Router>

          <Router path="/sign_in">
            <SignIn></SignIn>
          </Router>

          <Router path="/sign_up">
            <NewAccount></NewAccount>
          </Router>

          <Router path="/course/details">
            <CoursesDetails></CoursesDetails>
          </Router>

          {/* <PrivateRoute path="/checkout">
           <Checkout></Checkout>
          </PrivateRoute> */}

          <Router path="/checkout">
            <Checkout></Checkout>
          </Router>

          {/* <PrivateRoute path="/my-profile">
           <UserDasbord></UserDasbord>
          </PrivateRoute> */}

          <Router path="/user-dasbord">
            <UserDasbord></UserDasbord>
          </Router>

          <Router path="/my-profile">
            <MyProfile></MyProfile>
          </Router>

          <Router path="*">
            <NoMatch></NoMatch>
          </Router>

        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
