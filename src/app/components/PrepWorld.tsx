import ArticleGrid from "../props/ArticleGrid";

export default function PrepWorld(){
    return(
        <div className="container mb-5">
            <ArticleGrid jsonPath="/articles/prep.json"/>
        </div>
    )
}