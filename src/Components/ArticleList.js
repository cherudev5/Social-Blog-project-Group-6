import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from your API (JSON server)
    fetch('http://localhost:3000/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
