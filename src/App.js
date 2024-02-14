import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import ArticlesPage from '.ArticlesPage';
import JoinUsPage from './JoinUsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/articles" component={ArticlesPage} />
          <Route path="/join-us" component={JoinUsPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
