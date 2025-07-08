'use client';

import { useEffect, useState } from 'react';
import MainHeadSports from './MainHeadSports';
export interface Post {
  title: string;
  href: string;
  image: string;
  author: string;
  authorUrl: string;
  date: string;
  updated: string;
  excerpt: string;
  comments?: number;
}

export default function ArticleGridItemSports() {
  const [mainPost, setMainPost] = useState(null);
  const [nextPosts, setNextPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const main = await fetch('/sports/mainPost.json').then(res => res.json());
      const next = await fetch('/sports/nextPosts.json').then(res => res.json());
      setMainPost(main);
      setNextPosts(next);
    };
    fetchData();
  }, []);

  if (!mainPost) return <p>Loading...</p>;

  return <MainHeadSports mainPost={mainPost} nextPosts={nextPosts} />;
}
