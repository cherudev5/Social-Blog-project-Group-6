// ArticleDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Fetch specific article from db.json using the fetch API
    fetch(`http://localhost:3000/Articles/${id}`) // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        setArticle(data);
        setLikes(data.likes);
        setComments(data.comments);
      })
      .catch(error => console.error('Error fetching article:', error));
  }, [id]);

  const handleLike = () => {
    // Update likes in the state and also in the database
    const updatedLikes = likes + 1; // Assuming one like per click
    setLikes(updatedLikes);
    fetch(`http://localhost:3000/Articles/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        likes: updatedLikes,
      }),
    })
      .then(response => response.json())
      .then(data => console.log('Likes updated in the server:', data))
      .catch(error => console.error('Error updating likes:', error));
  };

    // Here you can send a request to update the likes in the database if needed
  

  const handleCommentSubmit = () => {
    // Update comments in the state and also in the database
    const updatedComments = [...comments, { id: comments.length + 1, text: newComment }];
    setComments(updatedComments); 
    fetch(`http://localhost:3000/Articles/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: newComment,
      }),
    })
      .then(response => response.json())
      .then(data => console.log('Comment posted to the server:', data))
      .catch(error => console.error('Error posting comment:', error));
  
    // Clear the comment input
    setNewComment('');
  };

  return (
    <div style= {{marginLeft:"20px",width: 1260, height:1120, borderRadius: 30, border: '1px black solid'}}>
      <h2>{article.title}</h2>
      <img src={article.imageurl} alt="img"style={{marginLeft:"250px",width: 339, height: 258, background: '#BCD2F2', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 35, border: '1px black solid'}}></img>
      <p>Author: {article.author}</p>
      <p>Date: {article.date}</p>
      <p>{article.content}</p>
      <button className="btn" onClick={handleLike}>Like</button>
      <p>Likes: {likes}</p>

      {/* Comment Section */}
      <h3>Comments</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <textarea className='comment-box'
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write your comment here"
      />
      <button className='btn' onClick={handleCommentSubmit}>Submit Comment</button>
    </div>
  );
};

export default ArticleDetail;
