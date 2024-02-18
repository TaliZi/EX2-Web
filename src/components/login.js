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
            const storedUser = JSON.parse(localStorage.getItem('userData'));
            if (!storedUser || storedUser.username !== username || storedUser.password !== password) {
                setError('Invalid username or password');
                return;
            }
        }

        setUsername('');
        setPassword('');
        setError('');

        alert('Login successful!');
        window.location.replace('/feed');
      };

    return (
        <div className="container mt-5 " style={{maxWidth:300}}>
            <h2>Login</h2>
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                />
            </div>
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
            {error && <p className="error mt-2">{error}</p>}
            <button onClick={()=>window.location.replace("/registration")} className="btn btn-primary mt-3">Registration</button>

        </div>
    );
};

export default Login;