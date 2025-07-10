import MainPostWithNextPosts, { Post } from '../sports/components/MainHeadSports';
import Header from '../sports/components/Header';
import SectionSlider from '../sports/components/SectionSlider';

import { notFound } from 'next/navigation';
import SubscribeBanner from '../sports/components/SubscribeBanner';
import LoadMoreSection from '../sports/components/LoadMoreSeccion';
import Sidebar from '../sports/components/Sidebar';
import ArchiveList from '../sports/components/ArchiveList';

interface ArchiveItem {
  title: string;
  href: string;
  image: string;
  date: string;
  updated: string;
  author?: string;
  excerpt?: string;
}



interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return [
    { category: 'politics' },
    { category: 'business' },
    { category: 'technology' },
    { category: 'sports' },
    { category: 'science' },
    { category: 'health' },
  ];
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  async function getData(): Promise<{
    mainPost: Post | null;
    nextPosts: Post[];
    archiveList: ArchiveItem[];
  } | null> {
    try {
      const res = await fetch(`${BASE_URL}/data/${category}.json`, { cache: 'no-store' });

      if (!res.ok) return null;

      const json = await res.json();

      return {
        mainPost: json.main?.[0] || null,
        nextPosts: json.next || [],
        archiveList: json.archive || []
      };
    } catch (err) {
      console.error('Error fetching merged JSON:', err);
      return null;
    }
  }

 
  const data = await getData();
  if (!data) return notFound();

  return (
    <div>
      <h1 className="section-page-heading text-center mt-4">{category}</h1>
      <Header />
      <SectionSlider />
      {data.mainPost && (
        <MainPostWithNextPosts
          mainPost={data.mainPost}
          nextPosts={data.nextPosts}
        />
      )}
      <div className="container mb-5">
        <div className="row lg-margin">
          <div className="col-12 col-lg-8 col-xl-9 mb-5 mb-lg-0 border-end">
            <SubscribeBanner />
            <ArchiveList items={data.archiveList} />
            <LoadMoreSection />
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}