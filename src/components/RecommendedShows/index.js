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

const recommendedShowsImagesList=[
      {
    
        "imgUrl": `${recommendedImage1}`
      },
      {
     
        "imgUrl": `${recommendedImage2}`
      },
      {
      
        "imgUrl":`${recommendedImage3}`
      },
      {

        "imgUrl": `${recommendedImage4}`
      },
      {

        "imgUrl":`${recommendedImage5}`
      },
      {
     
        "imgUrl": `${recommendedImage6}`
      },
      {
      
        "imgUrl": `${recommendedImage7}`
      },
      {

        "imgUrl": `${recommendedImage8}`
      }
      
    ]

class RecommendedShows extends Component {
 
  render() {
    const {recommendedShowsList}=this.props
   const showsRecommendedList=recommendedShowsList.map((eachShowImage,index)=>{
    return {...eachShowImage, imgUrl:recommendedShowsImagesList[index].imgUrl}
   })
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
            {showsRecommendedList.map((eachEvent, index) => (
              <RecommendedCardItem key={index} eachShow={eachEvent} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default RecommendedShows
