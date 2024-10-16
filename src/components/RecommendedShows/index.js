import "./index.css";
import { Component } from "react";
import RecommendedCardItem from "../RecommendedCardItem";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import recommendedImage1 from "./recommendedImage1.png"
import recommendedImage2 from "./recommendedImage2.png"
import recommendedImage3 from "./recommendedImage3.png"
import recommendedImage4 from "./recommendedImage4.png"
import recommendedImage5 from "./recommendedImage5.png"
import recommendedImage6 from "./recommendedImage6.png"
import recommendedImage7 from "./recommendedImage7.png"
import recommendedImage8 from "./recommendedImage8.png"

const recommendedShowsList={
    "events": [
      {
        "eventName": "Winter Wonderland Fair",
        "cityName": "West Douglas",
        "date": "2024-03-24T00:00:00.000Z",
        "weather": "Snowy 26°C",
        "distanceKm": "4264.1226847222415",
        "imgUrl": `${recommendedImage1}`
      },
      {
        "eventName": "Spring Clouds Art Exhibit",
        "cityName": "North Amy",
        "date": "2024-03-25T00:00:00.000Z",
        "weather": "Cloudy 7°C",
        "distanceKm": "3864.065400248832",
        "imgUrl": `${recommendedImage2}`
      },
      {
        "eventName": "Snowy Peaks Photography Workshop",
        "cityName": "Rayville",
        "date": "2024-03-26T00:00:00.000Z",
        "weather": "Snowy 18°C",
        "distanceKm": "14188.240054906337",
        "imgUrl":`${recommendedImage3}`
      },
      {
        "eventName": "Sunny Days Marathon",
        "cityName": "Hartville",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Sunny 2°C",
        "distanceKm": "9022.823129623723",
        "imgUrl": `${recommendedImage4}`
      },
      {
        "eventName": "Tropical Tunes Music Festival",
        "cityName": "South Andrew",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Cloudy 30°C",
        "distanceKm": "14311.615540703924",
        "imgUrl":`${recommendedImage5}`
      },
      {
        "eventName": "Frozen Harmony Concert",
        "cityName": "Port Markton",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Sunny -3°C",
        "distanceKm": "12476.33705344043",
        "imgUrl": `${recommendedImage6}`
      },
      {
        "eventName": "Cloudy Skies Book Fair",
        "cityName": "Lake Matthew",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Cloudy 14°C",
        "distanceKm": "6515.755364660444",
        "imgUrl": `${recommendedImage7}`
      },
      {
        "eventName": "Sunlit Path Charity Run",
        "cityName": "West Erika",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Sunny -4°C",
        "distanceKm": "4544.261026003867",
        "imgUrl": `${recommendedImage8}`
      }
      
    ],
    "page": 1,
    "pageSize": 10,
    "totalEvents": 8,
    "totalPages": 1
}

class RecommendedShows extends Component {
  render() {
    return (
      <>
        <div className="recommended-top-container">
          <p>
            Recommended shows{" "}
            <HiOutlineArrowNarrowRight  size={30} style={{ strokeWidth: 1.5 }} />
          </p>
          <p>See all</p>
        </div>
        <div className="recommended-sections">
          <ul className="recommended-shows-section">
            {recommendedShowsList.events.map((eachEvent, index) => (
              <RecommendedCardItem key={index} eachShow={eachEvent} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default RecommendedShows;
