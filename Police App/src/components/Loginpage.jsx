import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here (e.g., API calls)
    // For demonstration purposes, let's assume a simple check
    if (username === "username" && password === "password") {
      setLoggedIn(true);
      // You might want to use localStorage or sessionStorage to store login state
      // localStorage.setItem('loggedIn', 'true');
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    // Clear localStorage or sessionStorage on logout
    // localStorage.removeItem('loggedIn');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        {loggedIn ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">Welcome, {username}!</h1>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <h1 className="text-2xl font-bold mb-4">Welcome to Police App</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="username"
              >
                Mobile No:
                <input
                  type="Number"
                  id="username"
                  className="border-2 border-gray-300 rounded-md p-2 w-full"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password:
                <input
                  type="password"
                  id="password"
                  className="border-2 border-gray-300 rounded-md p-2 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;