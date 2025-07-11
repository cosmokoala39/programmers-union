import LoadMoreSection from './LoadMoreSeccion';
import NewsletterSignup from './NewsletterSignup';

import Sidebar from './Sidebar';
import SubscribeBanner from "./SubscribeBanner";



export default function Second(){
    return(
        <div className="container mb-5">
            <div className="row lg-margin">
                <div className="col-12 col-lg-8 col-xl-9 mb-5 mb-lg-0 border-end">
                    <SubscribeBanner/>
                    
                    <NewsletterSignup/>
                    
                    <LoadMoreSection/>
                    
                </div>
                <Sidebar/>
            </div>
        </div>
    )
}