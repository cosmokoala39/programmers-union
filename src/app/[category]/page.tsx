import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';

import MainPostWithNextPosts, { Post } from '../sports/components/MainHeadSports';
import Header from '../sports/components/Header';
import SectionSlider from '../sports/components/SectionSlider';
import LoadMoreSection from '../sports/components/LoadMoreSeccion';
import Sidebar from '../sports/components/Sidebar';
import ArchiveList from '../sports/components/ArchiveList';

type Category = 'politics' | 'business' | 'technology' | 'sports' | 'science' | 'health';

interface PageProps {
  params: Promise<{ category: Category }>;
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

async function getPostsByCategory(category: string): Promise<Post[] | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', `${category}.json`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const posts: Post[] = JSON.parse(fileContent);
    return posts;
  } catch (error) {
    console.error(`Failed to read data for category "${category}":`, error);
    return null;
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  const posts = await getPostsByCategory(category);
  if (!posts) return notFound();

  const mainPost = posts.find((post) => post.id === 1) || null;
  const nextPosts = posts.filter((post) => post.id === 2 || post.id === 3);

  return (
    <div>
      <h1 className="section-page-heading text-center mt-4">{category}</h1>
      <Header />
      <SectionSlider />
      {mainPost && (
        <MainPostWithNextPosts mainPost={mainPost} nextPosts={nextPosts} />
      )}
      <div className="container mb-5">
        <div className="row lg-margin">
          <div className="col-12 col-lg-8 col-xl-9 mb-5 mb-lg-0 border-end">
            <ArchiveList />
            <LoadMoreSection />
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
