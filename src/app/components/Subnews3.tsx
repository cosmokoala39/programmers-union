
import SportarticleSmall from "../SportarticleSmall";
import HawaiinewsSmall from "./HawaiinewaSmall";

export default function Subnews3 (){
     
    return(
        <div className="container mb-5 font">
            <div className="row lg-margin">
                <div className="col-12 col-lg-8 border-end mb-5 mb-lg-0 ">
                    <div className="row" >
                      <HawaiinewsSmall/>
                      <SportarticleSmall/>
                    </div>
                </div>
            </div>
        </div>
    )
}