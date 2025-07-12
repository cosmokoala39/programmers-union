import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";

import Detail from "../../detail/components/Detail";
import SubscriberFavorites from "../../sports/components/SubscriberFavorites";
import OrigamiAd from "../../sports/components/OrigamiAd";
import LookingBack from "../../sports/components/LookingBack";
import MidWeek from "../../sports/components/MidWeek";
import MostRecentStories from "../../sports/components/MostRecentStories";

import ArticleContent from "@/app/detail/components/ArticleContent";
import ClientDetails from "@/app/components/ClientDetails";

interface Article {
  id: number;
  category: string;
  title: string;
  author: string;
  authorUrl: string;
  date: string;
  updated: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
 
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } =await  params;

  try {
    const filePath = path.join(process.cwd(), "public", "data", `${category}.json`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const articles: Article[] = JSON.parse(fileContent);
    const article = articles.find((a) => a.slug === slug);

    if (!article) return notFound();
const isClientSlug = category==="politics" && slug === "puerto-ricos-former-governor-vindicated-in-historic-legal-twist";
    return (
      <div className="container my-5">
        <div className="row">
          <div className="post-entry-wrapper col-12 col-lg-8 col-xl-8 mb-5 mb-lg-0">
            <div className="row">
              {isClientSlug ? (
                <ClientDetails  article={article}/>
              ):(
                <ArticleContent article={article} />
              ) }
              
              
            </div>
            <Detail />
          </div>
          <div className="sidebar col-12 col-lg-4 col-xl-4 gx-lg-0">
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
    );
  } catch (error) {
    console.error("Error loading article:", error);
    return notFound();
  }
}
