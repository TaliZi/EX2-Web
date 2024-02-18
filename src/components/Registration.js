import React, { useState } from 'react';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!username || !password || !confirmPassword || !displayName || !image) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    const userData = { username, displayName, image, password };
    localStorage.setItem('userData', JSON.stringify(userData));

    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setDisplayName('');
    setImage(null);
    setError('');

    alert('Registration successful!');
    window.location.replace('/feed');
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registration</h2>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div className="mb-3"><input
  type="file"
  aria-label="File Upload"
  className="form-control"
  accept="image/*"
  onChange={handleImageChange}
  alt="Profile Image"
/>

        </div>
        <button type="button" className="btn btn-primary" onClick={handleRegister}>Register</button>
        {error && <p className="error mt-3">{error}</p>}
      </form>
    </div>
  );
};

export default Registration;