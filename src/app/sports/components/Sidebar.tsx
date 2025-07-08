import Script from 'next/script';
import GoogleAdBox1 from './GoogleAd';
import SubscriberFavorites from './SubscriberFavorites';
import STNPlayer from "./STNPlayer";
import MostRecentStories from './MostRecentStories';
import OrigamiAd from './OrigamiAd';
import GptAdBox3 from './GptAdBox3';
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

                    <STNPlayer/>
                    <GoogleAdBox1/>
                    <SubscriberFavorites/>
                    <GoogleAdBox1/>
                     <MostRecentStories/>
                     <OrigamiAd/>
                     <GptAdBox3/>
                     <NewEvents/>
                     <MidWeek/>
                     <div className='hotdeals'>
                     <HotDealsIframe/>

                     </div>
                     <LookingBack/>
                </div>
             

    )
}