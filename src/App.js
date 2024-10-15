import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import NotFound from "./components/NotFound"
import {Component} from "react"

const isAuthenticated = () => {
  return localStorage.getItem("authenticated") === "true";
};


class ProtectedRoute extends Component {
  render() {
    const { children } = this.props;
    return isAuthenticated() ? children : <Navigate to="/login" />;
  }
}
 
const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
        <Route path="/login" element={isAuthenticated() ? <Navigate to="/" /> : <Login />}/>
        <Route path="/signup" element={isAuthenticated() ? <Navigate to="/" /> : <SignUp/>}/>
        <Route path="/not-found" element={<NotFound/>}/>
        <Route path="*"  element={<Navigate to="/not-found"/>}/>  
      </Routes>
    </BrowserRouter>
  )
}

export default App;


