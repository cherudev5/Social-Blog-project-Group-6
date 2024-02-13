import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(){
  return (
    <div>
      <h1>Blog App</h1>
      <p>One popular article</p>
      {/* Display one popular article here */}

      <p>Current Date: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>Join Our Blog Community</h2>
        <p>Learn more about joining our blog app <Link to="/signup">here</Link>.</p>
      </section>
    </div>
  );
};

export default HomePage;
