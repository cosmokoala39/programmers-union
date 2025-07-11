

import Detail from "../../detail/components/Detail";
import SubscriberFavorites from "../../sports/components/SubscriberFavorites";
import OrigamiAd from "../../sports/components/OrigamiAd";
import LookingBack from "../../sports/components/LookingBack";
import MidWeek from "../../sports/components/MidWeek";
import MostRecentStories from "../../sports/components/MostRecentStories";
import ShareToolbar from "@/app/detail/components/ShareToolbar";
import ArticleContent from "@/app/detail/components/ArticleContent";



export default async function Page({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } =await params;

  let articles;
  try {
    const data = await import(`../../../../public/data/${category}.json`);
    // Access the main array in the JSON data
    articles = data.default.main;
  } catch (error) {
    console.log(error)
    return <div>Failed to load data for category: {category}</div>;
  }

  // Search for the article using the slug
  const article = articles.find((item: { slug: string }) => item.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      {/* <Mainheading /> */}
      <div className="container my-5">
        <div className="row">
          <div className="post-entry-wrapper col-12 col-lg-8 col-xl-8 mb-5 mb-lg-0">
            
            <div className="row">
              <ShareToolbar />
              <ArticleContent article={article} />
            </div>
            <Detail />
          </div>
          <div className="sidebar col-12 col-lg-4 col-xl-4 gx-lg-0 ">
            <div className="mx-2 px-2 me-2">
              <OrigamiAd />
              <SubscriberFavorites />
              <OrigamiAd />
              <MostRecentStories />
              <OrigamiAd />
              <MidWeek />
              <OrigamiAd />
              <LookingBack />
              <OrigamiAd />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

