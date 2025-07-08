// components/SubscriberFavorites.tsx
'use client';

export type PopularArticle = {
  id: number;
  title: string;
  url: string;
};

import { useEffect, useState } from 'react';


export default function SubscriberFavorites() {
  const [articles, setArticles] = useState<PopularArticle[]>([]);

  useEffect(() => {
    fetch('/sports/popular.json')
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div className="my-4">
      <div className="section-heading mb-3">
        <h2 className='subheading'>Subscriber Favorites</h2>
      </div>
      <div className="subscriber-faves d-flex flex-column align-items-center justify-content-center flex-1">
        {articles.map(article => (
          <article
            key={article.id}
            className="news-story d-flex flex-row w-100 mb-2 pb-2 border-bottom"
          >
            <div
              className="most-popular-ranking"
              style={{
                marginRight: '2rem',
                fontSize: '2rem',
                fontWeight: 'bold',
                fontStyle: 'italic',
                fontFamily: `'Source Serif Pro', Georgia, sans-serif`,
                marginTop: 'auto',
                marginBottom: 'auto',
              }}
            >
              {article.id}
            </div>
            <div
              className="most-popular-heading"
              style={{ marginTop: 'auto', marginBottom: 'auto' }}
            >
              <h3 style={{ fontSize: '1rem' }}>
                <a   className="story-title font" href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
