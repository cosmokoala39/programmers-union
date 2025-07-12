"use client"
import WidgetSection from "../props/WidgetSection";
import { useEffect, useState } from "react";



type Article = {
  id: number;
  category: string;
  title: string;
  slug?: string;
  image?: string;
  date: string;
};
export default function OtherField(){
  const [data, setData] = useState<Record<string, Article[]>>({});
  const categories = ["health", "sports", "technology"];

  useEffect(() => {
    const fetchData = async () => {
      const results: Record<string, Article[]> = {};
      await Promise.all(
        categories.map(async (category) => {
          const res = await fetch(`/data/${category}.json`);
          results[category] = await res.json();
        })
      );
      setData(results);
    };

    fetchData();
  }, []);
    return(
        <div className="container mb-5">
            <div className="row lg-margin">
              
                <WidgetSection
                  data={data} categories={categories}
                />
           
            </div>
        </div>
    )
}