import {Component} from "react"
import Navbar from "../Navbar"
import RecommendedShows from "../RecommendedShows"
import UpcomingShows from "../UpcomingShows"
import heroImage from "./heroImage.svg"
import "./index.css"


  

class Home extends Component {
    render(){
        return(
           <div className="home-bg-container">
            <Navbar/>
            <div className="hero-section">
                <img src={heroImage} alt="hero-image" className="hero-image"/>
                <div className="box"></div>
                <div className="hero-text-container">
                    <h1>Discover Exciting Events Happening Near You - Stay Tuned For Updates!</h1>
                    <p className="md-text">Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate, libero et velit interdum,
                        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra per
                    </p>
                    <p className="sm-text">Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate, libero et velit interdum,
                        ac 
                    </p>
                </div>
                <div className="recommended-shows-bg-container">
                    <RecommendedShows/>  
                </div>
            </div>
            <UpcomingShows/>
           
          
           </div>
        )
    }
}


export default Home;
