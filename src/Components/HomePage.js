import React, { useState, useEffect } from 'react';

function HomePage (){
  const [popularArticle, setPopularArticle] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/Articles')
      .then((response) => response.json())
      .then((data) => {
        const mostLikedArticle = data.reduce((prev, current) =>
          prev.likes > current.likes ? prev : current
        );
        setPopularArticle(mostLikedArticle);
      });
  }, []);

  return (
    <div style={{marginLeft:"20px",width: 1260, height: 900, borderRadius: 30, border: '1px black solid'}}>
      <h2 style={{color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}} >Popular Article</h2>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <h3>{popularArticle.title}</h3>
      <img src={popularArticle.imageurl} alt="img"style={{marginLeft:"250px",width: 339, height: 258, background: '#BCD2F2', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 35, border: '1px black solid'}}></img>
      <p>{popularArticle.content}</p>
      <p>Likes: {popularArticle.likes}</p>
      
      {/* Add section or button for information about joining the blog */}
    </div>
  );
};

export default HomePage;
