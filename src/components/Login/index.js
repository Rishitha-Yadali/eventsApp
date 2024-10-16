import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import "./index.css";
import { is } from "date-fns/locale";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    isAuthenticated: false,
  };
  onChangeEmail=(event)=>{
    this.setState({
      email: event.target.value
    })

  }
  onChangePassword=(event)=>{
    this.setState({
      password: event.target.value
    })
  }
  handleLogin = (event) => {
    event.preventDefault();
    const { isAuthenticated, email, password } = this.state;
    const user = localStorage.getItem("userCredentials");

    if (user === null) {
      this.setState({
        error: "You're not registered yet. Please create an account to continue.",
      });
    } else {
      if (!email || !password) {
        this.setState({
          error: "Please enter both email and password.",
        });
        return;
      } else {
        const parseUser = JSON.parse(user);
        if (parseUser.email === email && parseUser.password === password) {
          localStorage.setItem("isAuthenticated", "true");
          this.setState({
            isAuthenticated: true,
            error: "",
            email:"",
            password:""
          });
        } else {
          this.setState({
            error: "Invalid email or password.",
            email:"",
            password:""
          });
        }
      }
    }
  };

  
  render() {
    const { email, password, error, isAuthenticated} = this.state;
    if (isAuthenticated) {
      return <Navigate to="/" />;
    }
    return (
      <div className="login-container">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={this.handleLogin}>
          <div className="login-form">
            <label className="label">Email:</label>
            <input
             className="form-input"
              type="email"
              value={email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div>
            <label className="label">Password:</label>
            <input
            className="form-input"
              type="password"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          <button className="login-button-form" type="submit">Login</button>
        </form>
        <p className="signup-msg">
          Don't have an account? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    );
  }
}

export default Login;
