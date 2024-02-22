import React, { useState, useEffect, useRef } from "react";
import jsonData from "../data.json";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [sortBy, setSortBy] = useState("date");
  const [filterBy, setFilterBy] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [newPostMessage, setNewPostMessage] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedPostMessage, setEditedPostMessage] = useState("");
  const userData = JSON.parse(localStorage.getItem("userData")); // Function to handle adding a new post
  const handleAddPost = () => {
    // Check if user data is available
    if (!userData) {
      // Alert the user if user data is not found
      alert("User data not found. Please log in again.");
      return;
    }

    // Create a new post object
    const newPost = {
      id: posts.length + 1,
      name: userData.displayName,
      message: newPostMessage,
      email: userData.username,
      image: userData.image,
      date: new Date().toLocaleDateString(),
    };

    // Update the posts state with the new post
    setPosts([...posts, newPost]);
    // Clear the new post message input
    setNewPostMessage("");
    // Hide the add post form
  };

  // Effect hook to initialize posts, comments, and likedPosts states
  useEffect(() => {
    // Set initial posts, comments, and likedPosts using data from JSON
    setPosts(jsonData.Users);
    setComments(jsonData.Comments);
    setLikedPosts([]);
  }, []);

  // Function to handle sorting posts
  const handleSortChange = (e) => {
    // Update the sortBy state based on user selection
    setSortBy(e.target.value);
  };

  // Function to handle filtering posts by username
  const handleFilterChange = (e) => {
    // Update the filterBy state based on user input
    setFilterBy(e.target.value);
  };

  // Function to handle liking/unliking a post
  const handleLikePost = (email) => {
    // Check if the post is already liked
    if (likedPosts.includes(email)) {
      // If liked, remove the post from likedPosts
      setLikedPosts(likedPosts.filter((postEmail) => postEmail !== email));
    } else {
      // If not liked, add the post to likedPosts
      setLikedPosts([...likedPosts, email]);
    }
  };

  // Function to handle deleting a post
  const handleDeletePost = (postId) => {
    // Filter out the post to be deleted and update the posts state
    setPosts(posts.filter((post) => post.email !== postId));
  };

  // Function to handle initiating post editing
  const handleEditPost = (postId) => {
    // Set the post id being edited and retrieve its message
    setEditingPostId(postId);
    const postToEdit = posts.find((post) => post.email === postId);
    setEditedPostMessage(postToEdit.message);
  };

  // Function to handle saving edited post
  const handleSaveEditedPost = () => {
    // Map through posts and update the message of the edited post
    const updatedPosts = posts.map((post) => {
      if (post.email === editingPostId) {
        return {
          ...post,
          message: editedPostMessage,
        };
      }
      return post;
    });
    // Update the posts state with the edited post and reset editing states
    setPosts(updatedPosts);
    setEditingPostId(null);
    setEditedPostMessage("");
  };

  // Function to handle adding a comment to a post
  const handleAddComment = (postId, message) => {
    // Check if user data is available
    if (!userData) {
      // Alert the user if user data is not found
      alert("User data not found. Please log in again.");
      return;
    }

    // Create a new comment object
    const newComment = {
      commentFor: postId,
      name: userData.displayName, // Use display name from local storage
      message: message,
      email: userData.username, // Use username from local storage
      image: userData.image, // Use image from local storage
      date: new Date().toLocaleDateString(),
    };

    // Update the comments state with the new comment
    setComments([...comments, newComment]);
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    // Toggle the darkMode state
    setDarkMode((prevMode) => !prevMode);
  };

  // Function to handle user logout
  const handleLogout = () => {
    // Redirect the user to the login page
    window.location.replace("/login");
  };

  return (
    <>
      <div className={`${darkMode ? "dark-mode" : ""}`}>
        <nav
          style={{ height: 56, zIndex: 5 }}
          className="navbar navbar-expand-lg bg-white shadow-lg  sticky-top "
        >
          <div className="container-fluid">
            <div>
              <img
                className="mx-3"
                height={40}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
              />
            </div>
            <div style={{ alignItems: "center", gap: 20, display: "flex" }}>
              <input
                type="text"
                placeholder="Filter by username"
                value={filterBy}
                style={{ borderRadius: "20px", background: "#eff2f5" }}
                onChange={handleFilterChange}
                className="form-control"
              />
              <span style={{ fontWeight: "bolder" }} className="navbar-brand">
                {userData.displayName}
              </span>
              <img
                src={userData.image}
                className="profile-image"
                style={{ marginRight: 12 }}
              />
              <i
                className="fa fa-bars"
                type="button"
                onClick={() => setShowMenu(!showMenu)}
              ></i>
            </div>
          </div>
        </nav>
        {/* Sliding Navigation Menu */}
        <div className={`sliding-menu ${showMenu ? "open" : ""}`}>
          <ul className="menu-items">
            <li>
              <a href="#">
                <i className="bi bi-gear"></i> Settings
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-question-circle"></i> Support
              </a>
            </li>
            <li>
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div
          className="m-auto  mt-5 "
          style={{ maxWidth: 680, display: "grid", gap: 20 }}
        >
          <h2 className="mb-4">Feed</h2>
          <div style={{ maxWidth: 640 }} className="card-body shadow-lg">
            <h5 className="card-title">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control "
                  placeholder={`About what do you think ${userData.displayName} ?`}
                  value={newPostMessage}
                  style={{ background: "#eff2f5", borderRadius: "20px" }}
                  onChange={(e) => setNewPostMessage(e.target.value)}
                />
                <button
                  className="btn btn-primary mt-2"
                  onClick={handleAddPost}
                >
                  Add Post
                </button>
              </div>
            </h5>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="sortSelect" className="mr-2">
                Sort By:
              </label>
              <select
                id="sortSelect"
                value={sortBy}
                onChange={handleSortChange}
                className="form-select"
              >
                <option value="date">Date</option>
                <option value="popularity">Popularity</option>
              </select>
            </div>
          </div>
          {posts
            .filter((post) =>
              post.name.toLowerCase().includes(filterBy.toLowerCase())
            )
            .map((post, index) => (
              <div style={{ maxWidth: 640 }} className="card-body shadow-lg">
                <h5 className="card-title">{post.name}</h5>
                {editingPostId === post.email ? (
                  <>
                    <textarea
                      className="form-control mb-2"
                      value={editedPostMessage}
                      onChange={(e) => setEditedPostMessage(e.target.value)}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={handleSaveEditedPost}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <h6 className="card-text">{post.message}</h6>
                    <img className="image" src={post.image} alt={post.image} />
                  </>
                )}
                <p className="card-text">
                  <small className="text-muted">{post.date}</small>
                </p>
                <button
                  className="btn"
                  onClick={() => handleLikePost(post.email)}
                >
                  {likedPosts.includes(post.email) ? (
                    <i className="fas fa-thumbs-up text-primary"></i>
                  ) : (
                    <i className="far fa-thumbs-up text-primary"></i>
                  )}
                </button>
                <button
                  className="btn"
                  onClick={() => handleDeletePost(post.email)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
                {post.email === userData.username && (
                  <button
                    className="btn"
                    onClick={() => handleEditPost(post.email)}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                )}
                <div className="mt-3">
                  {comments
                    .filter((comment) => comment.commentFor === post.email)
                    .map((comment, cIndex) => (
                      <div key={cIndex} className=" mb-2">
                        <div className="card-body comment shadow-sm">
                          <p className="card-title">{comment.name}</p>
                          <h6 className="card-text">{comment.message}</h6>
                        </div>
                      </div>
                    ))}
                  <div>
                    <input
                      type="text"
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-control d-inline-block mr-2"
                      placeholder="Add a comment..."
                      style={{ background: " #eff2f5" }}
                    />
                    <button
                      className="btn btn-primary mt-3"
                      onClick={() => handleAddComment(post.email, message)}
                    >
                      Add Comment
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Feed;
