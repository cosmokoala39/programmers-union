import ArticleContent from "./ArticleContent";
import ShareToolbar from "./ShareToolbar";

export default function SideIcon(){
    return(
        <div className="row">
            <ShareToolbar/>
            <ArticleContent/>
        </div>
    )
}