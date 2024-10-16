import { Component } from "react";
import "./index.css";
import UpcomingCardItem from "../UpcomingCardItem";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import upcomingImage1 from "./upcomingImage1.png"
import upcomingImage2 from "./upcomingImage2.png"
import upcomingImage3 from "./upcomingImage3.png"
import upcomingImage4 from "./upcomingImage4.png"
import upcomingImage5 from "./upcomingImage5.png"
import upcomingImage6 from "./upcomingImage6.png"
import upcomingImage7 from "./upcomingImage7.png"
import upcomingImage8 from "./upcomingImage8.png"
import upcomingImage9 from "./upcomingImage9.png"
import upcomingImage10 from "./upcomingImage10.png"
import upcomingImage11 from "./upcomingImage11.png"
import upcomingImage12 from "./upcomingImage12.png"
import upcomingImage13 from "./upcomingImage13.png"
import upcomingImage14 from "./upcomingImage14.png"
import upcomingImage15 from "./upcomingImage15.png"
import upcomingImage16 from "./upcomingImage16.png"
import upcomingImage17 from "./upcomingImage17.png"
import upcomingImage18 from "./upcomingImage18.png"
import upcomingImage19 from "./upcomingImage19.png"
import upcomingImage20 from "./upcomingImage20.png"



const upcomingEventsList={
    "events": [
      {
        "eventName": "Winter Wonderland Fair",
        "cityName": "West Douglas",
        "date": "2024-03-24T00:00:00.000Z",
        "weather": "Snowy 26C",
        "distanceKm": "4264.1226847222415",
        "imgUrl": `${upcomingImage1}`
      },
      {
        "eventName": "Spring Clouds Art Exhibit",
        "cityName": "North Amy",
        "date": "2024-03-25T00:00:00.000Z",
        "weather": "Cloudy 7C",
        "distanceKm": "3864.065400248832",
        "imgUrl": `${upcomingImage2}`
      },
      {
        "eventName": "Snowy Peaks Photography Workshop",
        "cityName": "Rayville",
        "date": "2024-03-26T00:00:00.000Z",
        "weather": "Snowy 18C",
        "distanceKm": "14188.240054906337",
        "imgUrl": `${upcomingImage3}`
      },
      {
        "eventName": "Sunny Days Marathon",
        "cityName": "Hartville",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Sunny 2C",
        "distanceKm": "9022.823129623723",
        "imgUrl": `${upcomingImage4}`
      },
      {
        "eventName": "Tropical Tunes Music Festival",
        "cityName": "South Andrew",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Cloudy 30C",
        "distanceKm": "14311.615540703924",
        "imgUrl": `${upcomingImage5}`
      },
      {
        "eventName": "Frozen Harmony Concert",
        "cityName": "Port Markton",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Sunny -3C",
        "distanceKm": "12476.33705344043",
        "imgUrl": `${upcomingImage6}`
      },
      {
        "eventName": "Cloudy Skies Book Fair",
        "cityName": "Lake Matthew",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Cloudy 14C",
        "distanceKm": "6515.755364660444",
        "imgUrl": `${upcomingImage7}`
      },
      {
        "eventName": "Sunlit Path Charity Run",
        "cityName": "West Erika",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Sunny -4C",
        "distanceKm": "4544.261026003867",
        "imgUrl": `${upcomingImage8}`
      },
      {
        "eventName": "Winter Bliss Ice Sculpture Contest",
        "cityName": "Terrenceberg",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Snowy 25C",
        "distanceKm": "6350.197144394632",
        "imgUrl": `${upcomingImage9}`
      },
      {
        "eventName": "Winter Baking Contest",
        "cityName": "Terrenceberg",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Snowy 22C",
        "distanceKm": "63",
        "imgUrl": `${upcomingImage10}`
      },
      {
        "eventName": "Tech Innovators Conference",
        "cityName": "West Alexisstad",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Sunny 32C",
        "distanceKm": "6936.076444521937",
        "imgUrl": `${upcomingImage11}`
      },
      {
        "eventName": "Live Podcast: Voices of Today",
        "cityName": "Ryanstad",
        "date": "2024-03-28T00:00:00.000Z",
        "weather": "Cloudy 15C",
        "distanceKm": "10535.304422355775",
        "imgUrl":  `${upcomingImage12}`
      },
      {
        "eventName": "Rapid Coding Hackathon",
        "cityName": "Elizabethberg",
        "date": "2024-03-29T00:00:00.000Z",
        "weather": "Rainy 13C",
        "distanceKm": "14383.43229714746",
        "imgUrl":  `${upcomingImage13}`
      },
      {
        "eventName": "Winter Sports Expo",
        "cityName": "Mcclainburgh",
        "date": "2024-03-29T00:00:00.000Z",
        "weather": "Snowy 22C",
        "distanceKm": "7391.988226031083",
        "imgUrl":  `${upcomingImage14}`
      }, 
      {
        "eventName": "Meditation Retreat",
        "cityName": "East Julieport",
        "date": "2024-03-29T00:00:00.000Z",
        "weather": "Cloudy 27C",
        "distanceKm": "13803.22072758375",
        "imgUrl": `${upcomingImage15}`
      },
      {
        "eventName": "Film Director's Workshop",
        "cityName": "North Kylemouth",
        "date": "2024-03-29T00:00:00.000Z",
        "weather": "Cloudy 15C",
        "distanceKm": "4098.921739281934",
        "imgUrl": `${upcomingImage16}`
      },
      {
        "eventName": "Melodies Under The Stars",
        "cityName": "Andersonborough",
        "date": "2024-03-29T00:00:00.000Z",
        "weather": "Sunny 15C",
        "distanceKm": "17174.753089103386",
        "imgUrl": `${upcomingImage17}`
      },
      {
        "eventName": "Southern Literature Festival",
        "cityName": "Thompsonborough",
        "date": "2024-03-30T00:00:00.000Z",
        "weather": "Rainy 13C",
        "distanceKm": "13518.952293087284",
        "imgUrl": `${upcomingImage18}`
      },
      {
        "eventName": "Entrepreneurial Insights Series",
        "cityName": "South Michaelton",
        "date": "2024-03-30T00:00:00.000Z",
        "weather": "Sunny 2C",
        "distanceKm": "6114.571815661185",
        "imgUrl": `${upcomingImage19}`
      },
      {
        "eventName": "Entrepreneurial Series 2",
        "cityName": "South Madison",
        "date": "2024-03-30T00:00:00.000Z",
        "weather": "Sunny 3C",
        "distanceKm": "611",
        "imgUrl": `${upcomingImage20}`
      }
    ],
    "page": 1,
    "pageSize": 10,
    "totalEvents": 44,
    "totalPages": 5
  }

  
class UpcomingShows extends Component {
  render() {
    return (
      <div className="upcoming-shows-bg-container">
        <div className="upcoming-top-container">
          <p>
            Upcoming events{" "}
            <HiOutlineArrowNarrowRight size={30} style={{ strokeWidth: 1.5 }} />
          </p>
        </div>
        <div className="upcoming-sections">
          <ul className="upcoming-shows-section">
            {upcomingEventsList.events.map((eachEvent, index) => (
              <UpcomingCardItem key={index} eachEvent={eachEvent} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default UpcomingShows;
