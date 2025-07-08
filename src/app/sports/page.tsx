import ArticleGridItemSports from "./components/ArticleGridItemSports";
import Header from "./components/Header";
import Mainheading from "./components/Mainheading";

import Second from "./components/Second";
import SectionSlider from "./components/SectionSlider";



export default function sports(){
    return(
        <div>
            <Mainheading/>
            <h1 className="section-page-heading text-center mt-4">Sports</h1>
            <Header/>
            <SectionSlider/>
            <ArticleGridItemSports/>
           <Second/>
          
           
           

        </div>
    )
}