
// Login function
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BasicAuth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

    try {
      const response = await fetch("https://juanpm.pythonanywhere.com/api/almacenes/", {
        method: "GET", // Use the appropriate HTTP method (GET/POST)
        headers: {
          Authorization: authHeader,
        },
      });

      if (response.ok) {
        // Login successful
        localStorage.setItem("authHeader", authHeader); // Save the header to localStorage
        setError(""); // Clear any previous errors
        navigate("/inventario"); // Redirect to the user page
      } else {
        // Handle login failure
        setError("Invalid username or password.");
      }
    } catch (error) {
      // Handle network errors or unexpected issues
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2>Basic Authentication</h2>
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
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default BasicAuth;

// logout
const handleLogout = () => {
  localStorage.removeItem("authHeader");
  alert("Logged out successfully!");
};


// Prptector
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const authHeader = localStorage.getItem("authHeader"); // Replace with your actual header storage logic
    if (!authHeader) {
      navigate("/login"); // Redirect to the login page
    }
  }, [navigate]);

  return <>{children}</>;
};

export default AuthGuard;


// Example
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthGuard from "./AuthGuard";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;


// link: https://juanpm.pythonanywhere.com
