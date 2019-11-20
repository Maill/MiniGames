import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Helmet } from 'react-helmet';
import config from './config';
import Header from './Components/Molecules/Header/Header'
import AppStyle from './AppStyle';
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';
import TicTacToePage from './Pages/TicTacToePage';
import SudokuPage from './Pages/SudokuPage';
import SimonPage from './Pages/SimonPage';
import PlaySudoku from './Pages/PlaySudoku';
import { Provider } from 'react-redux';
import SudokuStore from './Store/Sudoku/SudokuStore';

const App = () => {
  return (
    <Provider store={SudokuStore}>
      <Helmet>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <meta name="google-signin-client_id" content={config.GoogleConfig.ClientID}></meta>
      </Helmet>
      <AppStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/sudoku/play" component={PlaySudoku} />  
          <Route path="/profile" component={Profile}/>
          <Route path="/tictactoe" component={TicTacToePage} />
          <Route path="/sudoku" component={SudokuPage} />
          <Route path="/simon" component={SimonPage} />
          <Route path="/" component={HomePage}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
