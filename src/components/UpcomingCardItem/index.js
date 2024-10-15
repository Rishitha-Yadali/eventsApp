import "./index.css"
import { TiLocation } from "react-icons/ti";
const UpcomingCardItem=(props)=>{
    const{eachEvent}=props
    const {eventName,cityName,date,weather,distanceKm,imgUrl}=eachEvent
    const dateStr = new Date(date);
    const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];
    const month = monthNames[dateStr.getMonth()];

    const formattedDate = `${month} ${dateStr.getDate()}, ${dateStr.getFullYear()}`;
    return(
        <li className="upcoming-event-item">
            <div className="upcoming-image-container">
                <img src={imgUrl} alt={eventName} className="upcoming-image"/> 
                <p className="formatted-date">{formattedDate}</p>
            </div>
       
           <div className="upcoming-event-information">
                <p className="upcoming-event-name">{eventName}</p>
                
                <div className="upcoming-event-text">   
                    <p className="location-city"><TiLocation size={18} className="location-icon"/> {cityName}</p>
                    <p>{weather} | {`${Math.ceil(distanceKm)} km`}</p>
                </div>
            </div>

        </li>
    )
}
export default UpcomingCardItem;

