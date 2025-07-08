import ArticleGrid from "../props/ArticleGrid";

export default function Wildfire(){
    return(
        <div className="container mb-5">
            <ArticleGrid jsonPath="/articles/maui.json"/>
        </div>
    )
}