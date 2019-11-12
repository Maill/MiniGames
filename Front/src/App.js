import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Helmet } from 'react-helmet';
import config from './config';
import Header from './Components/Molecules/Header/Header'
import AppStyle from './AppStyle';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

const App = () => {
  return (
    <>
      <Helmet>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <meta name="google-signin-client_id" content={config.GoogleConfig.ClientID}></meta>
      </Helmet>
      <AppStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/profile" component={Profile}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
