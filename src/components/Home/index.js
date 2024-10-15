import {Component} from "react"
import Navbar from "../Navbar"
import RecommendedShows from "../RecommendedShows"
import UpcomingShows from "../UpcomingShows"
import heroImage from "./heroImage.svg"
import "./index.css"
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import RecommendedCardItem from "../RecommendedCardItem"
import UpcomingCardItem from "../UpcomingCardItem"
import recommendedImage1 from "./recommendedImage1.svg"
import recommendedImage2 from "./recommendedImage2.svg"
import recommendedImage3 from "./recommendedImage3.svg"
import recommendedImage4 from "./recommendedImage4.svg"
import recommendedImage5 from "./recommendedImage5.svg"
import recommendedImage6 from "./recommendedImage6.svg"
import recommendedImage7 from "./recommendedImage7.svg"
import recommendedImage8 from "./recommendedImage8.svg"

import upcomingImage1 from "./upcomingImage1.svg"
import upcomingImage2 from "./upcomingImage2.svg"
import upcomingImage3 from "./upcomingImage3.svg"
import upcomingImage4 from "./upcomingImage4.svg"
import upcomingImage5 from "./upcomingImage5.svg"
import upcomingImage6 from "./upcomingImage6.svg"
import upcomingImage7 from "./upcomingImage7.svg"
import upcomingImage8 from "./upcomingImage8.svg"
import upcomingImage9 from "./upcomingImage9.svg"
import upcomingImage10 from "./upcomingImage10.svg"
import upcomingImage11 from "./upcomingImage11.svg"
import upcomingImage12 from "./upcomingImage12.svg"
import upcomingImage13 from "./upcomingImage13.svg"
import upcomingImage14 from "./upcomingImage14.svg"
// import upcomingImage15 from "./upcomingImage15.svg"
// import upcomingImage16 from "./upcomingImage16.svg"
// import upcomingImage17 from "./upcomingImage17.svg"
// import upcomingImage18 from "./upcomingImage18.svg"
// import upcomingImage19 from "./upcomingImage19.svg"
// import upcomingImage20 from "./upcomingImage20.svg"
// import upcomingImage21 from "./upcomingImage21.svg"
// import upcomingImage22 from "./upcomingImage22.svg"
// import upcomingImage23 from "./upcomingImage23.svg"
// import upcomingImage24 from "./upcomingImage24.svg"
// import upcomingImage25 from "./upcomingImage25.svg"
// import upcomingImage26 from "./upcomingImage26.svg"
// import upcomingImage27 from "./upcomingImage27.svg"
// import upcomingImage28 from "./upcomingImage28.svg"
// import upcomingImage29 from "./upcomingImage29.svg"
// import upcomingImage30 from "./upcomingImage30.svg"
// import upcomingImage31 from "./upcomingImage31.svg"
// import upcomingImage32 from "./upcomingImage32.svg"
// import upcomingImage33 from "./upcomingImage33.svg"
// import upcomingImage34 from "./upcomingImage34.svg"
// import upcomingImage35 from "./upcomingImage35.svg"
// import upcomingImage36 from "./upcomingImage36.svg"
// import upcomingImage37 from "./upcomingImage37.svg"
// import upcomingImage38 from "./upcomingImage38.svg"
// import upcomingImage39 from "./upcomingImage39.svg"
// import upcomingImage40 from "./upcomingImage40.svg"
// // import upcomingImage41 from "./upcomingImage41.svg"
// // import upcomingImage42 from "./upcomingImage42.svg"
// // import upcomingImage43 from "./upcomingImage43.svg"
// // import upcomingImage44 from "./upcomingImage44.svg"

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
    // {
    //   "eventName": "Meditation Retreat",
    //   "cityName": "East Julieport",
    //   "date": "2024-03-29T00:00:00.000Z",
    //   "weather": "Cloudy 27C",
    //   "distanceKm": "13803.22072758375",
    //   "imgUrl":  `${upcomingImage15}`
    // },
    // {
    //   "eventName": "Film Director's Workshop",
    //   "cityName": "North Kylemouth",
    //   "date": "2024-03-29T00:00:00.000Z",
    //   "weather": "Cloudy 15C",
    //   "distanceKm": "4098.921739281934",
    //   "imgUrl":  `${upcomingImage16}`
    // },
    // {
    //   "eventName": "Melodies Under The Stars",
    //   "cityName": "Andersonborough",
    //   "date": "2024-03-29T00:00:00.000Z",
    //   "weather": "Sunny 15C",
    //   "distanceKm": "17174.753089103386",
    //   "imgUrl":  `${upcomingImage17}`
    // },
    // {
    //   "eventName": "Southern Literature Festival",
    //   "cityName": "Thompsonborough",
    //   "date": "2024-03-30T00:00:00.000Z",
    //   "weather": "Rainy 13C",
    //   "distanceKm": "13518.952293087284",
    //   "imgUrl":  `${upcomingImage18}`
    // },
    // {
    //   "eventName": "Entrepreneurial Insights Series",
    //   "cityName": "South Michaelton",
    //   "date": "2024-03-30T00:00:00.000Z",
    //   "weather": "Sunny 2C",
    //   "distanceKm": "6114.571815661185",
    //   "imgUrl":  `${upcomingImage19}`
    // },
    // {
    //   "eventName": "Entrepreneurial Series 2",
    //   "cityName": "South Madison",
    //   "date": "2024-03-30T00:00:00.000Z",
    //   "weather": "Sunny 3C",
    //   "distanceKm": "611",
    //   "imgUrl":  `${upcomingImage20}`
    // },
    // {
    //   "eventName": "Rainy Day Book Fair",
    //   "cityName": "Mathismouth",
    //   "date": "2024-03-31T00:00:00.000Z",
    //   "weather": "Rainy 7C",
    //   "distanceKm": "6759.173892260938",
    //   "imgUrl": `${upcomingImage21}`
    // },
    // {
    //   "eventName": "Frosty Thoughts Poetry Night",
    //   "cityName": "West Mary",
    //   "date": "2024-03-31T00:00:00.000Z",
    //   "weather": "Cloudy -5C",
    //   "distanceKm": "11391.692510997877",
    //   "imgUrl": `${upcomingImage22}`
    // },
    // {
    //   "eventName": "Mystery and Crime Book Club",
    //   "cityName": "Alexanderbury",
    //   "date": "2024-03-31T00:00:00.000Z",
    //   "weather": "Windy 35C",
    //   "distanceKm": "15060.265760437802",
    //   "imgUrl": `${upcomingImage23}`
    // },
    // {
    //   "eventName": "Rock and Rain Music Festival",
    //   "cityName": "Kyleport",
    //   "date": "2024-03-31T00:00:00.000Z",
    //   "weather": "Rainy 9C",
    //   "distanceKm": "15123.435520517853",
    //   "imgUrl": `${upcomingImage24}`
    // },
    // {
    //   "eventName": "Gourmet Evening in the Rain",
    //   "cityName": "Port Richard",
    //   "date": "2024-04-01T00:00:00.000Z",
    //   "weather": "Rainy 14C",
    //   "distanceKm": "12539.459704310591",
    //   "imgUrl": `${upcomingImage25}`
    // },
    // {
    //   "eventName": "Windy Day Art Exhibit",
    //   "cityName": "Robertstad",
    //   "date": "2024-04-01T00:00:00.000Z",
    //   "weather": "Windy 13C",
    //   "distanceKm": "12588.058766919947",
    //   "imgUrl": `${upcomingImage26}`
    // },
    // {
    //   "eventName": "Rhythms in the Rain: Radio Hits Live",
    //   "cityName": "West Darrenfurt",
    //   "date": "2024-04-01T00:00:00.000Z",
    //   "weather": "Rainy 16C",
    //   "distanceKm": "15868.878095686481",
    //   "imgUrl": `${upcomingImage27}`
    // },
    // {
    //   "eventName": "Legal Legends: A Theatrical Dream",
    //   "cityName": "Claireville",
    //   "date": "2024-04-01T00:00:00.000Z",
    //   "weather": "Cloudy 33C",
    //   "distanceKm": "5325.329557638306",
    //   "imgUrl": `${upcomingImage28}`
    // },
    // {
    //   "eventName": "Winter Academic Summit",
    //   "cityName": "Jeffreyville",
    //   "date": "2024-04-01T00:00:00.000Z",
    //   "weather": "Snowy 14C",
    //   "distanceKm": "7991.890351772611",
    //   "imgUrl": `${upcomingImage29}`
    // },
    // {
    //   "eventName": "Winter Academic Summit 2",
    //   "cityName": "Gainesville",
    //   "date": "2024-04-01T00:00:00.000Z",
    //   "weather": "Snowy 20C",
    //   "distanceKm": "79",
    //   "imgUrl": `${upcomingImage30}`
    // },
    // {
    //   "eventName": "Autumn Rain Poetry Slam",
    //   "cityName": "Gregorymouth",
    //   "date": "2024-04-02T00:00:00.000Z",
    //   "weather": "Rainy 4C",
    //   "distanceKm": "6617.129981062603",
    //   "imgUrl": `${upcomingImage31}`
    // },
    // {
    //   "eventName": "Summer Book Festival",
    //   "cityName": "Summerschester",
    //   "date": "2024-04-02T00:00:00.000Z",
    //   "weather": "Sunny 13C",
    //   "distanceKm": "7349.056529212609",
    //   "imgUrl": `${upcomingImage32}`
    // },
    // {
    //   "eventName": "National Art Showcase",
    //   "cityName": "Robertchester",
    //   "date": "2024-04-03T00:00:00.000Z",
    //   "weather": "Sunny 8C",
    //   "distanceKm": "15744.643911629559",
    //   "imgUrl": `${upcomingImage33}`
    // },
    // {
    //   "eventName": "Sustainable Resources Expo",
    //   "cityName": "Kristenchester",
    //   "date": "2024-04-03T00:00:00.000Z",
    //   "weather": "Rainy 18C",
    //   "distanceKm": "13880.296604879019",
    //   "imgUrl": `${upcomingImage34}`
    // },
    // {
    //   "eventName": "Leadership & Career Summit",
    //   "cityName": "East Brandonville",
    //   "date": "2024-04-04T00:00:00.000Z",
    //   "weather": "Sunny 2C",
    //   "distanceKm": "2485.4762520253466",
    //   "imgUrl": `${upcomingImage35}`
    // },
    // {
    //   "eventName": "Visionary Ideas Conference",
    //   "cityName": "Brendabury",
    //   "date": "2024-04-04T00:00:00.000Z",
    //   "weather": "Sunny -2C",
    //   "distanceKm": "6963.499151926273",
    //   "imgUrl": `${upcomingImage36}`
    // },
    // {
    //   "eventName": "Innovative Minds Journal Launch",
    //   "cityName": "Lake Katherine",
    //   "date": "2024-04-05T00:00:00.000Z",
    //   "weather": "Snowy 25C",
    //   "distanceKm": "14306.301945975278",
    //   "imgUrl": `${upcomingImage37}`
    // },
    // {
    //   "eventName": "Next-Gen Tech Symposium",
    //   "cityName": "Murphymouth",
    //   "date": "2024-04-05T00:00:00.000Z",
    //   "weather": "Windy 7C",
    //   "distanceKm": "4326.080367961602",
    //   "imgUrl": `${upcomingImage38}`
    // },
    // {
    //   "eventName": "Resilient Teams Workshop",
    //   "cityName": "Ewingtown",
    //   "date": "2024-04-05T00:00:00.000Z",
    //   "weather": "Cloudy 31C",
    //   "distanceKm": "12043.653539503477",
    //   "imgUrl": `${upcomingImage39}`
    // },
    // {
    //   "eventName": "Resilient Teams Workshop 2",
    //   "cityName": "New York",
    //   "date": "2024-04-05T00:00:00.000Z",
    //   "weather": "Cloudy 20C",
    //   "distanceKm": "120",
    //   "imgUrl": `${upcomingImage40}`
    // }

  ],
  "page": 1,
  "pageSize": 10,
  "totalEvents": 44,
  "totalPages": 5
}


  

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
                    <div className="recommended-top-container">
                        <p>Recommended shows <HiOutlineArrowNarrowRight size={30} style={{strokeWidth:1.5}}/></p>
                        <p >See all</p>
                    </div>
                    <div className="recommended-sections">
                        <ul className="recommended-shows-section">
                            {recommendedShowsList.events.map((eachEvent, index)=>(     
                               <RecommendedCardItem key={index} eachShow={eachEvent}/> ))}
                        </ul>
                    </div>   
                </div>
               
                
             
 
            </div>
            <div className="upcoming-shows-bg-container">
                    <div className="upcoming-top-container">
                        <p>Upcoming events <HiOutlineArrowNarrowRight size={30} style={{strokeWidth:1.5}}/></p>
                        
                    </div>
                    <div className="upcoming-sections">
                        <ul className="upcoming-shows-section">
                            {upcomingEventsList.events.map((eachEvent, index)=>(     
                               <UpcomingCardItem key={index} eachEvent={eachEvent}/> ))}
                        </ul>
                    </div>
              

                </div>
          
           </div>
        )
    }
}


export default Home;

// // import upcomingImage41 from "./upcomingImage41.svg"
// // import upcomingImage42 from "./upcomingImage42.svg"
// // import upcomingImage43 from "./upcomingImage43.svg"
// // import upcomingImage44 from "./upcomingImage44.svg"


// const recommendedShowsList= [
//   {
//     "imgUrl": `${recommendedImage1}`
//   },
//   {

//     "imgUrl": `${recommendedImage2}`
//   },
//   {

//     "imgUrl":`${recommendedImage3}`
//   },
//   {

//     "imgUrl": `${recommendedImage4}`
//   },
//   {

//     "imgUrl":`${recommendedImage5}`
//   },
//   {

//     "imgUrl": `${recommendedImage6}`
//   },
//   {

//     "imgUrl": `${recommendedImage7}`
//   },
//   {

//     "imgUrl": `${recommendedImage8}`
//   }
// ]
// const upcomingEventsList=[
//     {
//       "imgUrl": `${upcomingImage1}`
//     },
//     {
//       "imgUrl": `${upcomingImage2}`
//     },
//     {
//       "imgUrl": `${upcomingImage3}`
//     },
//     {
//       "imgUrl": `${upcomingImage4}`
//     },
//     {
//       "imgUrl": `${upcomingImage5}`
//     },
//     {
//       "imgUrl": `${upcomingImage6}`
//     },
//     {
//       "imgUrl": `${upcomingImage7}`
//     },
//     {
//       "imgUrl": `${upcomingImage8}`
//     },
//     {
//       "imgUrl": `${upcomingImage9}`
//     },
//     {
//        "imgUrl": `${upcomingImage10}`
//     },
//     // {
//     //   "imgUrl": `${upcomingImage11}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage12}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage13}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage14}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage15}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage16}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage17}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage18}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage19}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage20}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage21}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage22}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage23}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage24}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage25}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage26}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage27}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage28}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage29}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage30}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage31}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage32}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage33}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage34}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage35}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage36}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage37}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage38}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage39}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage40}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage41}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage42}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage43}`
//     // },
//     // {
//     //   "imgUrl": `${upcomingImage44}`
//     // }
//   ]
