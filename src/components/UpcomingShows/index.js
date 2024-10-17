import { Component } from "react";
import "./index.css";
import UpcomingCardItem from "../UpcomingCardItem";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Loader, { TailSpin } from "react-loader-spinner"

import upcomingImage1 from "./upcomingImage1.png";
import upcomingImage2 from "./upcomingImage2.png";
import upcomingImage3 from "./upcomingImage3.png";
import upcomingImage4 from "./upcomingImage4.png";
import upcomingImage5 from "./upcomingImage5.png";
import upcomingImage6 from "./upcomingImage6.png";
import upcomingImage7 from "./upcomingImage7.png";
import upcomingImage8 from "./upcomingImage8.png";
import upcomingImage9 from "./upcomingImage9.png";
import upcomingImage10 from "./upcomingImage10.png";
import upcomingImage11 from "./upcomingImage11.png";
import upcomingImage12 from "./upcomingImage12.png";
import upcomingImage13 from "./upcomingImage13.png";
import upcomingImage14 from "./upcomingImage14.png";
import upcomingImage15 from "./upcomingImage15.png";
import upcomingImage16 from "./upcomingImage16.png";
import upcomingImage17 from "./upcomingImage17.png";
import upcomingImage18 from "./upcomingImage18.png";
import upcomingImage19 from "./upcomingImage19.png";
import upcomingImage20 from "./upcomingImage20.png";

const upcomingEventsList = [
  {
    imgUrl: `${upcomingImage1}`,
  },
  {
    imgUrl: `${upcomingImage2}`,
  },
  {
    imgUrl: `${upcomingImage3}`,
  },
  {
    imgUrl: `${upcomingImage4}`,
  },
  {
    imgUrl: `${upcomingImage5}`,
  },
  {
    imgUrl: `${upcomingImage6}`,
  },
  {
    imgUrl: `${upcomingImage7}`,
  },
  {
    imgUrl: `${upcomingImage8}`,
  },
  {
    imgUrl: `${upcomingImage9}`,
  },
  {
    imgUrl: `${upcomingImage10}`,
  },

  {
    imgUrl: `${upcomingImage11}`,
  },
  {
    imgUrl: `${upcomingImage12}`,
  },
  {
    imgUrl: `${upcomingImage13}`,
  },
  {
    imgUrl: `${upcomingImage14}`,
  },
  {
    imgUrl: `${upcomingImage15}`,
  },
  {
    imgUrl: `${upcomingImage16}`,
  },
  {
    imgUrl: `${upcomingImage17}`,
  },
  {
    imgUrl: `${upcomingImage18}`,
  },
  {
    imgUrl: `${upcomingImage19}`,
  },
  {
    imgUrl: `${upcomingImage20}`,
  },

  {
    imgUrl: `${upcomingImage1}`,
  },
  {
    imgUrl: `${upcomingImage2}`,
  },
  {
    imgUrl: `${upcomingImage3}`,
  },
  {
    imgUrl: `${upcomingImage4}`,
  },
  {
    imgUrl: `${upcomingImage5}`,
  },
  {
    imgUrl: `${upcomingImage6}`,
  },
  {
    imgUrl: `${upcomingImage7}`,
  },
  {
    imgUrl: `${upcomingImage8}`,
  },
  {
    imgUrl: `${upcomingImage9}`,
  },
  {
    imgUrl: `${upcomingImage10}`,
  },

  {
    imgUrl: `${upcomingImage11}`,
  },
  {
    imgUrl: `${upcomingImage12}`,
  },
  {
    imgUrl: `${upcomingImage13}`,
  },
  {
    imgUrl: `${upcomingImage14}`,
  },
  {
    imgUrl: `${upcomingImage15}`,
  },
  {
    imgUrl: `${upcomingImage16}`,
  },
  {
    imgUrl: `${upcomingImage17}`,
  },
  {
    imgUrl: `${upcomingImage18}`,
  },
  {
    imgUrl: `${upcomingImage19}`,
  },
  {
    imgUrl: `${upcomingImage20}`,
  },

  {
    imgUrl: `${upcomingImage1}`,
  },
  {
    imgUrl: `${upcomingImage2}`,
  },
  {
    imgUrl: `${upcomingImage3}`,
  },
  {
    imgUrl: `${upcomingImage4}`,
  },
];

class UpcomingShows extends Component {
  render() {
    const { upcomingShowsList,isLoading} = this.props;
    const eventsUpcomingList = upcomingShowsList.map((upcomingEvent, index) => {
      return {
        ...upcomingEvent,
        imgUrl: upcomingEventsList[index].imgUrl,
      };
    });
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
            {eventsUpcomingList.map((eachEvent, index) => (
              <UpcomingCardItem key={index} eachEvent={eachEvent} />
            ))}
          </ul>
        </div>
       
      </div>
    );
  }
}

export default UpcomingShows;
