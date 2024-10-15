import "./index.css"
import {Component} from "react"
import RecommendedCardItem from "../RecommendedCardItem"

class RecommendedShows extends Component {
    render(){
        return(
            <div>
                <h1>RecommendedCardItem component</h1>
                <RecommendedCardItem />

            </div>
        )
    }
}

export default RecommendedShows