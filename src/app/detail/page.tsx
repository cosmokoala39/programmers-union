import Mainheading from "@/app/sports/components/Mainheading";
import Header from "./components/Header";
import SideIcon from "./components/SideIcon";
import Detail from "./components/Detail";
import SubscriberFavorites from "../sports/components/SubscriberFavorites";
import OrigamiAd from "../sports/components/OrigamiAd";
import LookingBack from "../sports/components/LookingBack";
import MidWeek from "../sports/components/MidWeek";
import MostRecentStories from "../sports/components/MostRecentStories";



export default function DetailPage(){
    return(
        <>
        <Mainheading/>
        <div className="container my-5">
            <div className="row">
               <div className="post-entry-wrapper col-12 col-lg-8 col-xl-8 mb-5 mb-lg-0">
                <Header/>
                <SideIcon/>
                <Detail/>
               </div>
               <div className="sidebar col-12 col-lg-4 col-xl-4 gx-lg-0 ">
                <div className="mx-2 px-2 me-2">
                <OrigamiAd/>
                    <SubscriberFavorites/>
                    <OrigamiAd/>
                    <MostRecentStories/>
                    <OrigamiAd/>
                    <MidWeek/>
                    <OrigamiAd/>
                    
                    <LookingBack/>
                    <OrigamiAd/>
                    
                </div>
               </div>
            </div>
        </div>
        </>
    )
}