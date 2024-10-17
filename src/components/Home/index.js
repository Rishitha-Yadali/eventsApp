import {Component} from "react"
import Navbar from "../Navbar"
import RecommendedShows from "../RecommendedShows"
import UpcomingShows from "../UpcomingShows"
import heroImage from "./heroImage.svg"
import "./index.css"


  

class Home extends Component {
    state={
        recommendedShowsList:[],
        upcomingShowsList:[],
        hasMore:true,
        pageNumber:1,
        isLoading:false
    }
    componentDidMount=()=>{
        this.getRecommendedShows()
        this.getUpcomingShows()
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    getRecommendedShows=async ()=>{
        const imageUrl="https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
         const response=await fetch(imageUrl)
        
        if(response.ok===true){
            const data=await response.json()
            const {events}=data
            this.setState({
                recommendedShowsList:events
              })
        }
      
    }
    getUpcomingShows=async ()=>{
        const{pageNumber,upcomingShowsList}=this.state
        this.setState({
            isLoading:true
        })
        const upcomingImageUrl=`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageNumber}&type=upcoming`
        const response=await fetch(upcomingImageUrl)
        if(response.ok===true){
            const data=await response.json()
            const {events}=data
           
            this.setState({
                upcomingShowsList:[...upcomingShowsList,...events],
                isLoading:false,
                hasMore:events.length===10?true:false,
                pageNumber:data.page
              })
        }
    }


    handleScroll = () => {
        const { pageNumber, hasMore, isLoading } = this.state;

        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1) {
            if (hasMore && !isLoading) {
         
                this.setState({ isLoading: true }, () => {
                    this.setState((prevState) => (
                        { 
                        pageNumber: prevState.pageNumber + 1,
                        isLoading:false

                         }
                        ),
                        this.getUpcomingShows
                    );
                });
            }
        }
    };
    
    render(){
        const{recommendedShowsList,upcomingShowsList,isLoading}=this.state 
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
                    <RecommendedShows recommendedShowsList={recommendedShowsList}/>  
                </div>
            </div>
            <UpcomingShows upcomingShowsList={upcomingShowsList} isLoading={isLoading}/>
           
          
           </div>
        )
    }
}


export default Home;



    // handleScroll = () => {
    //     const{pageNumber,hasMore}=this.state
   
    //     if (window.innerHeight + document.documentElement.scrollTop=== document.documentElement.offsetHeight) {
    //         if(hasMore===false){
    //             this.setState(prevState=>{
    //                 return{
    //                     pageNumber:prevState.pageNumber+1,
    //                     isLoading:true
    //                 }
    //             },this.getUpcomingShows);
    //         }
    //         this.getUpcomingShows()
    //       }else{
    //         this.setState({hasMore:false});
    
    //     }
    //   };

// import { Component } from "react";
// import Navbar from "../Navbar";
// import RecommendedShows from "../RecommendedShows";
// import UpcomingShows from "../UpcomingShows";
// import heroImage from "./heroImage.svg";
// import "./index.css";

// class Home extends Component {
//   state = {
//     recommendedShowsList: [],
//     upcomingShowsList: [],
//     pageNumber: 1,
//     isLoading: false,
//     hasMore: true,
//     page:""
//   };

//   componentDidMount() {
//     this.getRecommendedShows();
//     this.getUpcomingShows();
//     window.addEventListener("scroll", this.handleScroll); // Add scroll event listener
//   }

//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.handleScroll); // Cleanup scroll event listener
//   }

//   // Fetch recommended shows
//   getRecommendedShows = async () => {
//     const imageUrl = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";
//     const response = await fetch(imageUrl);

//     if (response.ok) {
//       const data = await response.json();
//       const { events } = data;
//       this.setState({ recommendedShowsList: events });
//     }
//   };

//   // Fetch upcoming shows with pagination
//   getUpcomingShows = async () => {
//     const { pageNumber, upcomingShowsList, isLoading, hasMore } = this.state;
    
//     // If already loading or no more pages available, do nothing
//     if (isLoading || !hasMore) return;

//     this.setState({ isLoading: true });

//     const upcomingImageUrl = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageNumber}&type=upcoming`;
//     const response = await fetch(upcomingImageUrl);

//     if (response.ok) {
//       const data = await response.json();
//       const { events } = data;

//       this.setState({
//         upcomingShowsList: [...upcomingShowsList, ...events], 
//         page:data.page-1,// Append new events
//         pageNumber: pageNumber + 1, // Increment page number for next call
//         hasMore: events.length > 0, // If no events returned, stop further requests
//         isLoading: false,
//       });
//     } else {
//       this.setState({ isLoading: false }); // Stop loading on error
//     }
//   };

//   // Handle scroll event for lazy loading
//   handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop
//       === document.documentElement.offsetHeight
//     ) {
//       this.getUpcomingShows(); // Load more when scrolled to bottom
//     }
//   };

//   render() {
//     const { recommendedShowsList, upcomingShowsList, isLoading,page } = this.state;

//     return (
//       <div className="home-bg-container">
//         <Navbar />
//         <div className="hero-section">
//           <img src={heroImage} alt="hero" className="hero-image" />
//           <div className="box"></div>
//           <div className="hero-text-container">
//             <h1>Discover Exciting Events Happening Near You - Stay Tuned For Updates!</h1>
//             <p className="md-text">
//               Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate, libero et velit interdum, ac
//               aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra per.
//             </p>
//             <p className="sm-text">
//               Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate, libero et velit interdum, ac.
//             </p>
//           </div>
//           <div className="recommended-shows-bg-container">
//             <RecommendedShows recommendedShowsList={recommendedShowsList} />
//           </div>
//         </div>
//         <UpcomingShows upcomingShowsList={upcomingShowsList} pag={page}/>
//         {isLoading && <p>Loading more shows...</p>} {/* Show loading message */}
//       </div>
//     );
//   }
// }

// export default Home;
