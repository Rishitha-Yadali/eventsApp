import {Component} from "react"
import "./index.css"
import UpcomingCardItem from "../UpcomingCardItem"
class UpcomingShows extends Component {
    render(){
        return(
            <div>
                <p>UpcomingShows Route</p>
                <UpcomingCardItem/>
            </div>
        )
    }
}

export default UpcomingShows