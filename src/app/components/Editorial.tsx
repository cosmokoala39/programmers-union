import ArticleGrid from "../props/ArticleGrid";

export default function Editorial(){
    return(
        <div className="container mb-5">
            <ArticleGrid jsonPath="/data/technology.json"/>  
      </div>
    )
}