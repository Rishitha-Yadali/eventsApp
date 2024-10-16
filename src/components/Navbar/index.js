import {Component} from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { TiHeart } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import "./index.css"
class Navbar extends Component {
    render(){
        return(
            <nav className="navbar-container">
                <div className="nav-top-container">
                  <div className="navbar-logo">
                    BookUsNow
                  </div>
                  <div className="nav-top-right-container">
                  <div className="nav-button-search-container">
                    <button type="button" className="menu-button"><GiHamburgerMenu size={15}/>Categories</button>
                    <input type="text" placeholder="DJI phontom" className="event-search-bar"/>
                    <IoIosSearch className="search-icon" style={{ strokeWidth: 20 }}/>
                  </div>
                  <div className="buttons-container">
                    <button type="button" className="heart-button"><TiHeart size={20} className="fav-icon"/> Favourites</button>
                    <button type="button" className="login-button">Sign In</button>
                  </div>
                  </div>  
                </div>
           
                <div className="nav-bottom-container">
                    <div className="location-container">
                       <button type="button" className="location-button"><TiLocation size={18} className="location-icon"/> Mumbai, India 
                       <MdOutlineNavigateNext className="navigate-icon" size={18} style={{strokeWidth:0}}/></button>
                    </div>
                    <ul className="nav-links-container">
                        <li className="nav-link-item"><a href="#" className="nav-link">Live Shows</a></li>
                        <li className="nav-link-item"><a href="#" className="nav-link">Streams</a></li>
                        <li className="nav-link-item"><a href="#" className="nav-link">Movies</a></li>
                        <li className="nav-link-item"><a href="#" className="nav-link">Plays</a></li>
                        <li className="nav-link-item"><a href="#" className="nav-link">Events</a></li>
                        <li className="nav-link-item"><a href="#" className="nav-link">Sports</a></li>
                        <li className="nav-link-item"><a href="#" className="nav-link">Activities</a></li>
                      
                    </ul>
                   
                  </div>

                  <div className="sm-nav-top-container">
                  <div className="sm-nav-container">
                    <div className="navbar-logo">
                      BookUsNow
                    </div>
                    <div className="location-container">
                       <button type="button" className="location-button"><TiLocation size={18} className="location-icon"/> Mumbai, India 
                       <MdOutlineNavigateNext className="navigate-icon" size={18} style={{strokeWidth:0}}/></button>
                    </div>
                  </div>
                  <div className="sm-nav-buttons-container">
                    <IoIosSearch className="sm-nav-image" size={25} style={{ strokeWidth: 10 }}/>
                    <FaHeart className="sm-nav-image"  size={22}/>
                 
                    <RiContactsLine className="sm-nav-image" size={20} style={{ strokeWidth: 1 }}/>
                  </div>   
                </div>
                <ul className="sm-nav-links-container">
                        <li className="nav-link-item"><a href="#" className="nav-link">Live Shows</a></li>
                        <li className="nav-link-item"><a href="#" className="nav-link">Streams</a></li>
                        <li className="nav-link-item"><a href="#" className="nav-link">Movies</a></li>
                        <li className="nav-link-item"><a href="#" className="nav-link">Plays</a></li>
                        <li className="nav-link-item"><a href="#" className="nav-link">Events</a></li>
                        <li className="nav-link-item"><a href="#" className="nav-link">Sports</a></li>
                        <li className="nav-link-item"><a href="#" className="nav-link">Activities</a></li>
                      
                    </ul>
            </nav>
        )
    }
}

export default Navbar