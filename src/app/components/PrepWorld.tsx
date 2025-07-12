'use client';

import { useEffect, useState } from 'react';
import ArticleWidgetGrid from '../props/ArticleWidgetGrid';




type Article = {
  id: number;
  category: string;
  title: string;
  slug?: string;
  image?: string;
  date: string;
};
export default function PrepWorld() {
  const [data, setData] = useState<Record<string, Article[]>>({});
    const categories = ["politics", "science", "technology","business"];
  
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
    }, [])
  
    return (
      <main className="container mb-5">
        <ArticleWidgetGrid data={data} categories={categories} />
      </main>
    );
  }
  