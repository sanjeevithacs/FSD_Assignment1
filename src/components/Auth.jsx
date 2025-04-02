import React, { useState } from "react";

const Auth = ({ setIsAuthenticated, setUsername }) => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      setIsAuthenticated(true);
      setUsername(username); // Store username
    } else alert("Enter valid credentials");
  };

  return (
    <div className="auth">
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="login-btn" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
