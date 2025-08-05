import React from 'react';
import "./About.css"
const About = () => {
  return (
    <div className="about-container">
      <h1>About This Quiz App</h1>

      <p>
        This Quiz App is a simple and interactive platform designed to help users test their knowledge by answering a set of 10 questions. 
        The app is built to be straightforward and user-friendly, allowing you to focus on the quiz itself without distractions.
      </p>

      <p>
        Whether you want to challenge yourself or just have fun learning, this app provides immediate feedback on your answers so you can track your progress.
      </p>

      <h2>About the Creator</h2>
      <p className='about-author'>
        This app was created by me i enjoy building web applications. The goal was to create a clean, functional quiz experience with minimal design.
      </p>
      <div className="social-icons">
        <a
          href="https://instagram.com/g0yal_harsh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://leetcode.com/u/harshGoyal12/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <img
            src="https://assets.leetcode.com/static_assets/public/icons/favicon-96x96.png"
            alt="LeetCode"
            style={{ width: "28px", height: "28px" }}
          />
        </a>
        <a
          href="https://github.com/harshgoyal1806"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/harsh-goyal-986"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
