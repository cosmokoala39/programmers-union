'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Article {
  title: string;
  image: string;
  url: string;
  date: string;
  slug:string;
}

interface ArticleGridProps {
  jsonPath: string;
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ jsonPath }) => {
  const [data, setData] = useState<{ title: string; link: string; articles: Article[] } | null>(null);
  const [hover,setHover]=useState(false)
  useEffect(() => {
    fetch(jsonPath)
      .then(res => res.json())
      .then(json => setData(json));
  }, [jsonPath]);

  if (!data) return null;

  return (
    <div className="row lg-margin">
      <div className="col-12">
        <div className="section-heading">
          <h2>
            <Link href={data.link} className='subheading'
            style={{ color: hover ? 'black' : '#1562A7' }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            >
              {data.title} <span><i className="fas fa-chevron-right"></i></span>
            </Link>
          </h2>
        </div>
      </div>
      {data.articles.map((article, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-3 border-start">
          <article className="news-story mb-3 clearfix">
            <div className="thumbnail med d-none d-md-block">
              <Link href={article.url}>
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
              <Link className='story-title font' href={article.url}>{article.title}</Link>
            </h3>
            <ul className="byline list-unstyled ">
              <li className='update-font'>{article.date}</li>
            </ul>
          </article>
        </div>
      ))}
    </div>
  );
};

export default ArticleGrid;
