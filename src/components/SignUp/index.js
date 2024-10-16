import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import "./index.css";


class SignupPage extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    error: "",
    isAuthenticated: false
  };
  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handleSignup = (event) => {
    event.preventDefault();
    const{ email, username, password}=this.state
    const userData={email, username, password}
    
    if (!email ||!username ||!password) {
      this.setState({ error: "All fields are required" });
      return;
    }
    else{
      const checkUserRegistrationStatus=localStorage.getItem("userRegistered")  
      if(checkUserRegistrationStatus==='true'){
        this.setState({error: "User already registered"})
        return
      }
      else{
      localStorage.setItem("userRegistered","true")
      localStorage.setItem("userCredentials",JSON.stringify(userData))
      localStorage.setItem("isAuthenticated","true")
      this.setState({
        isAuthenticated:true,
        email:"",
        username:"",
        password:"",
       
      })
    }
  
  }
    
    
  };

  render() {
    const { email, username, password, error, isAuthenticated } = this.state;

    if (isAuthenticated) {
      return <Navigate to="/" />;
    }

    return (
      <div className="signup-container">
        <h2>Signup</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={this.handleSignup}>
          <div className="signup-form">
            <label className="signup-label">Email:</label>
            <input
              className="signup-input"
              type="email"
              value={email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div>
            <label className="signup-label">Username:</label>
            <input
              className="signup-input"
              type="text"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div>
            <label className="signup-label">Password:</label>
            <input
              className="signup-input"
              type="password"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          <button type="submit" className="signup-button-form">Signup</button>
        </form>
        <p>
          Already have an account? <Link className="login" to="/login">Login here</Link>
        </p>
      </div>
    );
  }
}

export default SignupPage;
