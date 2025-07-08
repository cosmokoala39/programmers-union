import ArticleGrid from "../props/ArticleGrid";

export default function Editorial(){
    return(
        <div className="container mb-5">
            <ArticleGrid jsonPath="/articles/editorial.json"/>  
      </div>
    )
}