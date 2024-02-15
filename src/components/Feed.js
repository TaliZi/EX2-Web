import React, { useState, useEffect } from 'react';
import jsonData from '../data.json';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [sortBy, setSortBy] = useState('date'); 
  const [filterBy, setFilterBy] = useState('');

  useEffect(() => {
    
    setPosts(jsonData.Users);
    setComments(jsonData.Comments);
    
    
    setLikedPosts([]);
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };

  const handleLikePost = (email) => {
    
    if (likedPosts.includes(email)) {
      
      setLikedPosts(likedPosts.filter((postEmail) => postEmail !== email));
    } else {
      
      setLikedPosts([...likedPosts, email]);
    }
  };
  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(filterBy.toLowerCase())
  );

  const sortedPosts = filteredPosts.sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'popularity') {
      
      return b.likes - a.likes;
    } else {
      return 0;
    }
  });

  const handleAddComment = (postId, message) => {
    
    const newComment = {
      commentFor: postId,
      name: 'Your Name', 
      message: message,
      email: 'your.email@example.com', 
      image: '', 
      date: new Date().toLocaleDateString() 
    };

    
    setComments([...comments, newComment]);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Feed</h2>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="sortSelect" className="mr-2">Sort By:</label>
          <select id="sortSelect" value={sortBy} onChange={handleSortChange} className="form-select">
            <option value="date">Date</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="sortSelect" className="mr-2">Filter By:</label>
          <input
            type="text"
            placeholder="Filter by username"
            value={filterBy}
            onChange={handleFilterChange}
            className="form-control"
          />
        </div>
      </div>
      {sortedPosts.map((post, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h3 className="card-title">{post.name}</h3>
            <p className="card-text">{post.message}</p>
            <img className='image' src={post.image} alt={post.image} />
            <p className="card-text"><small className="text-muted">{post.date}</small></p>
            <button className="btn" onClick={() => handleLikePost(post.email)}>
              {likedPosts.includes(post.email) ? (
                <i className="fas fa-thumbs-up text-primary"></i> 
              ) : (
                <i className="far fa-thumbs-up text-primary"></i> 
              )}
            </button>
            <input type="text" className="form-control d-inline-block mr-2" placeholder="Add a comment..." />
            <button className="btn btn-primary" onClick={() => handleAddComment(post.email, 'Comment message')}>Add Comment</button>
            <div className="mt-3">
              {comments
                .filter((comment) => comment.commentFor === post.email)
                .map((comment, cIndex) => (
                  <div key={cIndex} className="card bg-light mb-2">
                    <div className="card-body comment">
                      <h5 className="card-title">{comment.name}</h5>
                      <p className="card-text">{comment.message}</p>
                      <p className="card-text"><small className="text-muted">{comment.date}</small></p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;