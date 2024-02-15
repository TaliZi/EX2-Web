import React, { useState } from 'react';
import userData from '../data.json'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('All fields are required');
      return;
    }

    const user = userData.Users.find(user => user.email === username);

    if (!user || user.password !== password) {
      setError('Invalid username or password');
      return;
    }

    setUsername('');
    setPassword('');
    setError('');

    alert('Login successful!');
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;