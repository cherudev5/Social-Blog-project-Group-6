import React, { useState, useEffect } from 'react';

function ArticleCard({ article }) {
  const [likes, setLikes] = useState(article.likes);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the specific article from your API (JSON server)
    fetch(`http://localhost:3000/comments?articleId=${article.id}`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [article.id]);

  const handleLikeClick = () => {
    // Assuming you have a function to handle likes on the server-side
    // In a real-world scenario, you would typically make an API call to update the likes
    // For simplicity, I'm just updating the state here
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <p>Likes: {likes}</p>
      <button onClick={handleLikeClick}>Like</button>
      <a href={`/articles/${article.id}`}>Read More</a>

      <div className="comments">
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ArticleCard;
