import Script from 'next/script';

import SubscriberFavorites from './SubscriberFavorites';

import MostRecentStories from './MostRecentStories';
import OrigamiAd from './OrigamiAd';

import NewEvents from './NewEvents';
import MidWeek from './MidWeek';
import HotDealsIframe from '@/app/components/HotDealsIframe';
import LookingBack from './LookingBack';



<Script
  strategy="lazyOnload"
  src="//embed.sendtonews.com/player2/embedcode.php?fk=qYxs2yfk&cid=13479&SIZE=400&floatwidth=400"
  data-type="s2nScript"
/>


export default function Sidebar(){
    return(
        
                <div className="sidebar col-12 col-lg-4 col-xl-3">

                    
                  
                    <SubscriberFavorites/>
                    
                     <MostRecentStories/>
                     <OrigamiAd/>
                     
                     <NewEvents/>
                     <MidWeek/>
                     <div className='hotdeals'>
                     <HotDealsIframe/>

                     </div>
                     <LookingBack/>
                </div>
             

    )
}