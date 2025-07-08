'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Article {
  title: string;
  url: string;
  updated?: string;
  image?: string;
}
export default function SportarticleSmall () {
    const [articles, setArticles] = useState<Article[]>([]);
    const [hover, setHover] = useState(false);
  useEffect(() => {
    fetch('/articles/article4.json')
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error('Failed to load articles', err));
  }, []);
    return (
        <div className="col-12 col-lg-6 border-right">
                        <div className="section-heading">
                          <h2>
                            <a href="/category/hawaii-news" className='text-decoration-none subheading' style={{ color: hover ? 'black' : '#1562A7' }}
                            onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}>
                              sports <span><i className="fas fa-chevron-right"></i></span>
                            </a>
                          </h2>
                        </div>
                    
                        {articles.map((article, index) => (
                          <article key={index} className="news-story pb-3 mb-3 clearfix border-bottom">
                            {article.image && (
                             <div className="thumbnail">
                              <a href={article.url}>
                                <Image
                                  src={article.image}
                                  alt={article.title}
                                  width={350} // replace with actual width
                                  height={250} // replace with actual height
                                  className="w-100 d-block"
                                  loading="lazy"
                                  style={{ objectFit: 'cover' }}
                                />
                              </a>
                            </div>
                            )}
                            <h3 className=" my-2">
                              <a className='story-title' href={article.url}>{article.title}</a>
                            </h3>
                            {article.updated && (
                              <ul className="byline list-unstyled">
                                < li className='update-font'> {article.updated}</li>
                              </ul>
                            )}
                          </article>
                        ))}
                      </div>
    )
}