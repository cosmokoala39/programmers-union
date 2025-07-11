"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Article {
  id: number;
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  author: string;
  updated: string;
}

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [breakingNews, setBreakingNews] = useState<Article[]>([]);
  const [popularArticles, setPopularArticles] = useState<Article[]>([]);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [articlesRes, breakingRes, popularRes] = await Promise.all([
          fetch("/data/business.json"),
          fetch("/data/politics.json"),
          fetch("/data/politics.json"),
        ]);

        const [articlesData, breakingData, popularData] = await Promise.all([
          articlesRes.json() as Promise<Article[]>,
          breakingRes.json() as Promise<Article[]>,
          popularRes.json() as Promise<Article[]>,
        ]);

        // Filter to avoid undefined href errors
        const isValid = (article: Article) =>
          article.slug && article.title && article.image;

        setArticles(articlesData.filter(isValid));
        setBreakingNews(breakingData.filter(isValid));
        setPopularArticles(popularData.filter(isValid));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container mb-5 font">
      <div className="row row-cols-1 row-cols-md-3 mb-5 row">
        {/* Main Articles */}
        <div className="col-12 col-lg-5 col-xl-6 border-start border-end mb-5 mb-lg-0 order-1 order-lg-2">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className={`news-story ${index === 0 ? 'text-center feature' : 'clearfix d-flex'} border-bottom pb-3 mb-3`}
            >
              <div
                className={`${index === 0 ? 'thumbnail mx-auto' : 'thumbnail small me-3 mb-0 d-none d-md-block'}`}
                style={{
                  position: 'relative',
                  width: index === 0 ? '100%' : '100px',
                  height: index === 0 ? '407px' : '63px',
                }}
              >
                {article.slug ? (
                  <Link href={article.slug} title={article.title}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="d-block"
                      style={{ objectFit: 'cover' }}
                    />
                  </Link>
                ) : (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="d-block"
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </div>

              {index === 0 ? (
                <>
                  <h3 className="my-2 fw-bold text-dark">
                    {article.slug ? (
                      <Link href={article.slug} className="text-decoration-none text-black">
                        {article.title}
                      </Link>
                    ) : (
                      article.title
                    )}
                  </h3>
                  {article.shortdescription && <p className="excerpt mb-3">{article.shortdescription}</p>}
                  <ul className="byline list-unstyled d-flex flex-wrap justify-content-center">
                    {article.author && (
                      <li className="text-secondary">
                        By{' '}
                        <Link href="#" className="text-decoration-none text-secondary hover-link">
                          {article.author}
                        </Link>
                      </li>
                    )}
                    <li className="fst-italic text-danger ms-3">• Last updated {article.updated}</li>
                  </ul>
                </>
              ) : (
                <div className="flex-grow-1">
                  <h3 className="story-title mb-2 article-font">
                    {article.slug ? (
                      <Link href={article.slug} className="text-decoration-none text-black">
                        {article.title}
                      </Link>
                    ) : (
                      article.title
                    )}
                  </h3>
                  
                  <ul className="byline list-unstyled d-flex flex-wrap">
                    {article.author && (
                      <li className="text-secondary">
                        By{' '}
                        <Link href="#" className="text-decoration-none text-secondary hover-link">
                          {article.author}
                        </Link>
                      </li>
                    )}
                    <li className="fst-italic text-danger ms-3">• Last updated {article.updated}</li>
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Breaking News */}
        <div className="col-12 col-lg-3 mb-5 mb-lg-0 order-2 order-lg-1">
          <div className="section-heading">
            <h2
              className="breaking-news-head mt-2"
              style={{ color: hover ? 'black' : '#1562A7' }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Link href="#" className="text-decoration-none">
                Breaking News <i className="fas fa-chevron-right"></i>
              </Link>
            </h2>
          </div>

          {breakingNews.map((article) => (
            <article key={article.id} className="news-story border-bottom pb-3 mb-3 clearfix">
              <div className="thumbnail small me-3 mb-3 d-none d-md-block float-start">
                <Link href={article.slug}>
                  <Image src={article.image} alt={article.title} width={70} height={47} />
                </Link>
              </div>
              <h3 className="story-title mb-2 breaking-news">
                <Link href={article.slug} className="text-black text-decoration-none">
                  {article.title}
                </Link>
              </h3>
              <ul className="byline">
                <li className="fst-italic text-danger me-3">Last updated {article.updated}</li>
              </ul>
            </article>
          ))}

          <Link
            className="d-block button"
            href="/category/breaking-news/"
            title="See more from Breaking News"
          >
            See More Breaking News <i className="fas fa-chevron-right"></i>
          </Link>
        </div>

        {/* Sidebar */}
        <div className="col-12 col-lg-4 col-xl-3 order-3">
          {/* Today's Paper */}
          <div className="todays-paper mb-5 clearfix" style={{ fontFamily: 'sans-serif' }}>
            <Link
              className="no-underline text-dark d-block"
              href="https://gateway.staradvertiser.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="float-start me-3"
                src="https://www.staradvertiser.com/wp-content/plugins_redesign/cmd-hsa-todays-paper-widget/class/views/../../images/HSA-todayspaper.jpg"
                alt="Subscribe to the Star-Advertiser"
                width={100}
                height={111}
                unoptimized
              />
            </Link>
            <Link
              className="text-decoration-none text-dark d-block mt-2 lh-1"
              href="https://gateway.staradvertiser.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>View Todays Paper</strong>
            </Link>
            <small className="d-block my-2 lh-1">
              Subscribe today to read the newspaper online.
            </small>
            <Link
              className="button-3"
              href="https://gateway.staradvertiser.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe Now
            </Link>
          </div>

          {/* Subscriber Favorites */}
          <div className="mb-4">
            <div className="section-heading">
              <h2 className="subscriber-favorite">Subscriber Favorites</h2>
            </div>

            <div className="cmg_most_popular_widget-2 d-flex flex-column">
              {popularArticles.map((article, index) => (
                <article
                  key={article.id}
                  className="news-story d-flex mb-2 pb-2 border-bottom"
                >
                  <div
                    className="most-popular-ranking"
                    style={{
                      marginRight: '2rem',
                      marginTop: 'auto',
                      marginBottom: 'auto',
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                      fontFamily: 'Source Serif Pro, Georgia, sans-serif',
                    }}
                  >
                    {index + 1}
                  </div>
                  <div className="most-popular-heading my-auto">
                    <h3 className="mb-0 my-3">
                      <Link
                        className="story-title lh-1"
                        href={article.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {article.title}
                      </Link>
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
