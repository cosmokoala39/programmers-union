'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Article {
  id: number;
  category?: string;
  title: string;
  slug: string;
  updated?: string;
  image?: string;
}

export default function HawaiinewsSmall() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    fetch('/data/health.json')
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error('Failed to load articles', err));
  }, []);

  if (articles.length === 0) return null;

  return (
    <div className="col-12 col-lg-6 border-right">
      <div className="section-heading">
        <h2>
          <Link
            href="/health"
            className="text-decoration-none subheading"
            style={{ color: hover ? 'black' : '#1562A7' }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Health News <span><i className="fas fa-chevron-right"></i></span>
          </Link>
        </h2>
      </div>

      {articles.map((article, index) => (
        <article key={article.id} className="news-story pb-3 mb-3 clearfix border-bottom">
          {/* Show image only for the first article */}
          {index === 0 && article.image && (
            <div className="thumbnail mb-2">
              <Link  href={`${article.category}/${article.slug}`}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={350}
                  height={250}
                  className="w-100 d-block"
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
              </Link>
            </div>
          )}
          <h3 className="my-2">
            <Link className="story-title"  href={`${article.category}/${article.slug}`}>
              {article.title}
            </Link>
          </h3>
          {article.updated && (
            <ul className="byline list-unstyled">
              <li className="update-font">Updated {article.updated}</li>
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}
