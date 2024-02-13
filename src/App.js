import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArticlesPage from './Components/ArticlesPage';
import HomePage from './Components/HomePage';
import Navbar from './Components/NavBar';
import SignUpPage from './Components/SignUpPage';


function App (){
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/articles" component={ArticlesPage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
