// import "./index.css"
// import { Component } from "react"


// class Login extends Component {
//     render(){
//         return(
//           <div>Login</div>
//         )
//     }
// }

// export default Login

import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import "./index.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    isAuthenticated: false,
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    // Simulate login process
    if (email === "user@example.com" && password === "password") {
      localStorage.setItem("authenticated", "true");
      this.setState({ isAuthenticated: true });
    } else {
      this.setState({ error: "Invalid credentials" });
    }
  };

  render() {
    const { email, password, error, isAuthenticated } = this.state;

    if (isAuthenticated) {
      return <Navigate to="/" />;
    }

    return (
      <div className="container">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={this.handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
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
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    );
  }
}

export default Login;
