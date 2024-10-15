// import {Component} from "react"
// import "./index.css"

// class SignUp extends Component{
//     render(){
//         return(
//            <div>SignUp Route</div>
//         )
//     }
// }

// export default SignUp

import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import "./index.css";

class SignupPage extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    error: "",
    isAuthenticated: false,
  };

  handleSignup = (e) => {
    e.preventDefault();
    const { email, username, password } = this.state;

    // Simulate signup process
    if (email && username && password) {
      // Simulate saving user data and authenticating them
      localStorage.setItem("authenticated", "true"); // Automatically log in the user
      this.setState({ isAuthenticated: true });
    } else {
      this.setState({ error: "All fields are required" });
    }
  };

  render() {
    const { email, username, password, error, isAuthenticated } = this.state;

    // If authenticated, navigate to the home route
    if (isAuthenticated) {
      return <Navigate to="/" />;
    }

    return (
      <div className="container">
        <h2>Signup</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={this.handleSignup}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    );
  }
}

export default SignupPage;
