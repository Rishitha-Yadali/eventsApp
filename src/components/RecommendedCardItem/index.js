import "./index.css"
import { TiLocation } from "react-icons/ti";
const RecommendedCardItem=(props)=>{
    const{eachShow}=props
    console.log(eachShow)
    const{eventName,cityName,date,weather,distanceKm,imgUrl}=eachShow
    const dateStr = new Date(date);
    const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];
    const month = monthNames[dateStr.getMonth()];

    const formattedDate = `${month} ${dateStr.getDate()}, ${dateStr.getFullYear()}`;
    return(
        <li className="recommended-event-item">
            <img src={imgUrl} alt={eventName} className="recommended-image"/>
            <div className="event-information">
                <div className="event-text">
                    <p className="event-name">{eventName}</p>
                    <p className="location-city"><TiLocation size={18} className="location-icon"/> {cityName}</p>
                </div>
                <div className="event-text">
                    <p>{formattedDate}</p>
                    <p>{weather} | {`${Math.ceil(distanceKm)} km`}</p>
                </div>
            </div>
        </li>
    )
}

export default RecommendedCardItem;
