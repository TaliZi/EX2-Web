import React, { useState } from "react";
import userData from "../data.json";

const Login = () => {
  // State variables to hold username, password, and error messages
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function to handle login button click
  const handleLogin = () => {
    // Check if username or password is empty
    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    // Find user with the given username
    const user = userData.Users.find((user) => user.email === username);

    // If user not found or password is incorrect
    if (!user || user.password !== password) {
      // Check if the user is stored in local storage and has correct credentials
      const storedUser = JSON.parse(localStorage.getItem("userData"));
      if (
        !storedUser ||
        storedUser.username !== username ||
        storedUser.password !== password
      ) {
        setError("Invalid username or password");
        return;
      }
    }

    // Clear username, password, and error message
    setUsername("");
    setPassword("");
    setError("");

    // Alert user about successful login and redirect to feed page
    alert("Login successful!");
    window.location.replace("/feed");
  };

  // Render login form
  return (
    <div
      style={{
        display: "flex",
        top: "25vh",
        position: "relative",
        width: "75%",
        margin: "auto",
        alignItems: "center",
      }}
    >
      <div style={{ width: 500 }}>
        <img
          height={106}
          style={{ marginLeft: "-28px" }}
          src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
          alt="×¤×™×™×¡×‘×•×§"
        />
        <h2 style={{ fontSize: 28 }}>
          Connect with friends and the world around you on Facebook.
        </h2>
      </div>
      <div
        className="shadow-lg container mt-5 bg-white p-6"
        style={{ maxWidth: 400, borderRadius: 8 }}
      >
        <div className="mb-3">
          {/* Input field for username */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          {/* Input field for password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        {/* Login button */}
        <button
          onClick={handleLogin}
          className="btn btn-primary"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
        {/* Error message display */}
        {error && <p className="error mt-2">{error}</p>}
        {/* Registration button */}
        <button
          onClick={() => window.location.replace("/registration")}
          className="btn text-white mt-3 m-auto"
          style={{
            background: "#42B729",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          Create New Account
        </button>
      </div>
    </div>
  );
};

export default Login;