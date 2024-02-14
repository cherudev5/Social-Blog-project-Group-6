import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Featured Article</h1>
      {/* Display popular article here */}
      <p>Current Date: {new Date().toLocaleDateString()}</p>
      <section>
        <h2>Join Our Blog Community</h2>
        <p>Learn more about joining us <Link to="/join-us">here</Link>.</p>
      </section>
    </div>
  );
}

export default HomePage;
