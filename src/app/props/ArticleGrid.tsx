'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Article {
  id: number;
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  author: string;
  updated: string;
  category?: string;
  date?: string;
}
 
interface ArticleGridProps {
  jsonPath: string;
}



const ArticleGrid: React.FC<ArticleGridProps> = ({ jsonPath }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    fetch(jsonPath)
      .then(res => res.json())
      .then((json: Article[]) => setArticles(json))  
      .catch(err => console.error(err));
  }, [jsonPath]);

  if (!Array.isArray(articles) || articles.length === 0) return null;

  return (
    <div className="row lg-margin">
      <div className="col-12">
        <div className="section-heading">
          <h2>
            <Link
              href={`/${articles[0].category ?? ''}`}
              className="subheading"
              style={{ color: hover ? 'black' : '#1562A7' }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {articles[0].category} <span><i className="fas fa-chevron-right"></i></span>
            </Link>
          </h2>
        </div>
      </div>

      {articles.slice(0, 4).map((article) => (
        <div key={article.id} className="col-12 col-md-6 col-lg-3 border-start">
          <article className="news-story mb-3 clearfix">
            <div className="thumbnail med d-none d-md-block">
              <Link href={`${article.category}/${article.slug}`}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-100 d-block"
                  style={{ objectFit: 'cover' }}
                />
              </Link>
            </div>
            <h3 className="story-title my-2">
              <Link className="story-title font"href={`${article.category}/${article.slug}`}>
                {article.title}
              </Link>
            </h3>
            <ul className="byline list-unstyled">
              <li className="update-font">{article.date}</li>
            </ul>
          </article>
        </div>
      ))}
    </div>
  );
};

export default ArticleGrid;
