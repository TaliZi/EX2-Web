import React, { useState } from "react";

const Registration = () => {
  // State variables to hold user registration information and error messages
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  // Function to handle user registration
  const handleRegister = () => {
    // Check if any field is empty
    if (!username || !password || !confirmPassword || !displayName || !image) {
      setError("All fields are required");
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Check if password meets minimum length requirement
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    // Store user data in local storage
    const userData = { username, displayName, image, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Clear form fields and error message
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setDisplayName("");
    setImage(null);
    setError("");

    // Alert user about successful registration and redirect to feed page
    alert("Registration successful!");
    window.location.replace("/login");
  };

  // Function to handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Render registration form
  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center" }}>
      <div
        className="container w-50 h-50 shadow-lg"
        style={{ background: "white" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 18,
          }}
        >
          <img
            style={{ width: "35px", borderRadius: 5 }}
            src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-2038471-1718509.png"
          />
          <h2 style={{ fontWeight: "bold" }}>Registration</h2>
        </div>
        <form>
          <div className="mb-3">
            {/* Input field for username */}
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            {/* Input field for password */}
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            {/* Input field for confirming password */}
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            {/* Input field for display name */}
            <input
              type="text"
              className="form-control"
              placeholder="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            {/* Input field for uploading profile image */}
            <input
              type="file"
              aria-label="File Upload"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
              alt="Profile Image"
            />
          </div>
          {/* Register button */}
          <button
            type="button"
            className="btn btn-primary"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
            onClick={handleRegister}
          >
            Register
          </button>

          {/* Error message display */}
          {error && <p className="error mt-3">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Registration;
