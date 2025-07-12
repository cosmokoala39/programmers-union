import ArticleGrid from "../props/ArticleGrid";

export default function Photogallery(){
    return(
        <div className="container mb-5">
            <ArticleGrid jsonPath="/data/science.json"/>
        </div>
    )
}