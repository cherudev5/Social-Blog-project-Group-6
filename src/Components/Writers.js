// Writers.js
import React, { useState } from 'react';

const Writers = () => {
  const [blogData, setBlogData] = useState({
    author: '',
    title: '',
    description: '',
    content: '',
    imageUrl: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Here you can send a request to post the blog to the server
    fetch('http://localhost:3000/Articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Blog posted to the server:', data);
        // Optionally, you can redirect to the newly created blog's page
      })
      .catch(error => console.error('Error posting blog:', error));
  };

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Write a Blog</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Author:
          <input type="text" name="author" value={blogData.author} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Title:
          <input type="text" name="title" value={blogData.title} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={blogData.description} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Content:
          <textarea name="content" value={blogData.content} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" name="imageUrl" value={blogData.imageUrl} onChange={handleInputChange} />
        </label>
        <br />
        <button className="btn" type="submit">Submit Blog</button>
      </form>
    </div>
  );
};

export default Writers;
