import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ArticleList (){
  const [articles, setArticles] = useState([]);

  

  useEffect(() => {
    fetch('http://localhost:3000/Articles') // Assuming your JSON server is running on port 3000
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <h2>Article List</h2>
      {articles.map(article => (
        <div key={article.id} className="article">
          <h3>{article.title}</h3>
          <p>Author: {article.author}</p>
          <p>Date: {article.date}</p>
          <p>Description: {article.description}</p>
          <p>Likes{article.likes}</p>
          <Link to={`/articles/${article.id}`}>Read More</Link>
          
        </div>
      ))}
    </div>
   
   
  
  );
};

export default ArticleList;
