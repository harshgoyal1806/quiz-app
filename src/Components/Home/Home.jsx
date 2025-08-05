import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2 className="intro">Welcome to the Quiz App.</h2>
      <NavLink to="/quiz" className="start-btn">Start Quiz</NavLink>
    </div>
  );
};

export default Home;
