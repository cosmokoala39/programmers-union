import ArchiveCard from "./ArchiveCard";
import EventCarousel from "./EventCarousel";
import EventWidgetHeader from "./EventWidgetHeader";
import GoogleAdBox from "./GoogleAdBox";
import HawaiiJobsWidget from "./HawaiiJobsWidget";
import HotDealsIframe from "./HotDealsIframe";
import LocalBusinessGuide from "./LocalBusinessGuide";
import OrigamiAdWidget from "./OrigamiAdWidget";

import PrepWorld from "./PrepWorld";
import SpecialSection from "./SpecialSection";
import Wildfire from "./Wildfire";

export default function Newswithsidebar(){
    return(
       
        <div className="container mb-5">
            <div className="row lg-margin">
                <div className="col-12 col-lg-8 col-xl-9 border-end mb-5 mb-lg-0">
                    <EventWidgetHeader/>
                    <EventCarousel/>
                    <PrepWorld/>
                    <SpecialSection/>
                    <HotDealsIframe/>
                    <HawaiiJobsWidget/>
                    <LocalBusinessGuide/>
                    <Wildfire/>
                </div>
                <div className="col-12 col-lg-4 col-xl-3">
                    <OrigamiAdWidget/>
                    <GoogleAdBox/>
                    <ArchiveCard/>
                    <OrigamiAdWidget/>
                    <GoogleAdBox/>
                </div>
            </div>
       </div>
    )
}