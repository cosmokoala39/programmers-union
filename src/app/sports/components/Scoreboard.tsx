import ArchiveList from './ArchiveList';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { category: string };
}
interface ScoreboardItem {
   
    title: string,
    href: string,
    image:string,
    date: string,
    updated: string,
    author?:string,
    excerpt?:string
  
}

export async function generateStaticParams() {
  return [
    { category: 'sports' },
    { category: 'technology' },
    { category: 'politics' },
    { category: 'business' },
    { category: 'health' },
    { category: 'science' },
  ];
}

export default async function ScoreboardPage({ params }: PageProps) {
  const { category } = params;

  async function getData(): Promise<ScoreboardItem[] | null> {
    try {
      // Use relative URL on server fetch
      const res = await fetch(`/category/${category}/scoreboard.json`, {
        cache: 'no-store',
      });

      if (!res.ok) return null;
      return await res.json();
    } catch (err) {
      console.error('Scoreboard fetch error:', err);
      return null;
    }
  }

  const items = await getData();
  if (!items) return notFound();

  return (
    <div className="container my-5">
      <ArchiveList items={items} />
    </div>
  );
}
