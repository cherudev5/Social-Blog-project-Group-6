
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SignupForm from './Components/SignupForm';
import HomePage from './Components/HomePage';
import ArticlesPage from './Components/ArticlesPage';
import SingleArticle from './Components/SingleArticle';
import Writers from './Components/Writers';
import './App.css';

function App() {
  
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/articles" element={<ArticlesPage/>} />
          <Route path="/articles/:id" element={<SingleArticle/>} />
          <Route path="/writers" element={<Writers/>} />  
          <Route path="/signup" element={<SignupForm/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
