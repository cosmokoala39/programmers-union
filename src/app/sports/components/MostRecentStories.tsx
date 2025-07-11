// components/MostRecentStories.tsx
'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
interface RecentStory {
  title: string;
  url: string;
  img: string;
  author: string;
  authorUrl: string;
  date: string;
  updated?: string;
  excerpt?: string;
  comments?: number;
}

export default function MostRecentStories() {
  const [stories, setStories] = useState<RecentStory[]>([]);

  useEffect(() => {
    fetch('/sports/mostrecent.json')
      .then(res => res.json())
      .then(data => setStories(data));
  }, []);

  return (
    <div id="related-stories" className="related-stories most-read mb-5">
      <div className="section-heading">
        <h2 className='subheading'>Most Recent Stories</h2>
      </div>
      {stories.map((story, index) => (
        <article
          key={index}
          className="news-story border-bottom pb-2 mb-3 clearfix d-flex"
        >
          <div className="thumbnail small me-3 mb-3" style={{ minWidth: '70px' }}>
            <Link href={story.url} title={story.title}>
              <Image
                src={story.img}
                alt={story.title}
                width={70}
                height={47}
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </div>
          <div>
            <h3 className=" mb-2" style={{ fontSize: '1rem' }}>
              <Link className="story-title font" href={story.url} title={story.title}>
                {story.title}
              </Link>
            </h3>
          </div>
        </article>
      ))}
    </div>
  );
}
