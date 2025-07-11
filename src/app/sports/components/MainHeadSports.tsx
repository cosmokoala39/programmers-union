'use client';

import Image from 'next/image';
import Link from 'next/link';

export type Post = {
  id:number;
  title: string;
  slug: string;            
  category: string;        
  image: string;
  author: string;
  authorUrl?: string;
  date: string;
  updated: string;
  excerpt: string;
  comments?: number;
};

interface Props {
  mainPost: Post;
  nextPosts: Post[];
}

export default function MainPostWithNextPosts({ mainPost, nextPosts }: Props) {
  // Helper to generate href from category and slug
  const generateHref = (post: Post) => `/${post.category}/${post.slug}`;

  return (
    <div className="container mb-2">
      <div className="row lg-margin">
        {/* Main Post */}
        <div className="col-12 col-lg-6 mb-4">
          <article className="h-100 w-100 news-story archive">
            <div className="thumbnail h-auto">
              <Link href={generateHref(mainPost)} title={mainPost.title}>
                <div style={{ position: 'relative', width: '100%', height: 'clamp(250px, 45vw, 450px)' }}>
                  <Image
                    src={mainPost.image}
                    alt={mainPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="h-100 w-100 d-block"
                  />
                </div>
              </Link>
            </div>

            <div>
              <h3 className="story-title my-2 font">
                <Link className="story-title-big" href={generateHref(mainPost)}>
                  {mainPost.title}
                </Link>
              </h3>
              <ul className="byline list-unstyled d-flex">
                <li className="custom_byline me-2 update-font">
                  By{' '}
                  {mainPost.authorUrl ? (
                    <Link className="update-font hover-link text-decoration-none" href={mainPost.authorUrl}>
                      {mainPost.author}
                    </Link>
                  ) : (
                    <span className="update-font">{mainPost.author}</span>
                  )}
                </li>
                <li className="me-2 update-font">{mainPost.date}</li>
                <li className="fst-italic text-danger me-2" style={{ fontSize: '12px' }}>
                  Last updated {mainPost.updated}
                </li>
              </ul>
              <p className="excerpt mt-3 mb-0">
                {mainPost.excerpt}{' '}
                <Link className="fw-bold" href={generateHref(mainPost)}>
                  Read more
                </Link>
              </p>
            </div>
          </article>
        </div>

        {/* Next Posts */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="container pb-4 p-0">
            <div className="row g-4">
              {nextPosts.map((post, index) => (
                <div className="col-12 col-md-6" key={index}>
                  <article className="h-100 w-100 news-story archive">
                    <div className="thumbnail h-auto">
                      <Link href={generateHref(post)} title={post.title}>
                        <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 250px"
                            style={{ objectFit: 'cover' }}
                            className="w-100 d-block"
                          />
                        </div>
                      </Link>
                    </div>
                    <div>
                      <h3 className="story-title my-2 font">
                        <Link className="story-title-big" href={generateHref(post)}>
                          {post.title}
                        </Link>
                      </h3>
                      <ul className="list-unstyled d-flex" style={{ lineHeight: '20px' }}>
                        <li className="custom_byline update-font me-2" style={{ fontSize: '12px' }}>
                          By{' '}
                          {post.authorUrl ? (
                            <Link
                              className="update-font hover-link text-decoration-none"
                              href={post.authorUrl}
                              style={{ fontSize: '12px' }}
                            >
                              {post.author}
                            </Link>
                          ) : (
                            <span className="update-font" style={{ fontSize: '12px' }}>
                              {post.author}
                            </span>
                          )}
                        </li>
                        <li className="me-2 update-font" style={{ fontSize: '12px' }}>
                          {post.date}
                        </li>
                        <li className="fst-italic text-danger me-2" style={{ fontSize: '12px' }}>
                          Last updated {post.updated}
                        </li>
                      </ul>
                      <p className="excerpt mt-3 mb-0">
                        {post.excerpt}{' '}
                        <Link className="fw-bold" href={generateHref(post)}>
                          Read more
                        </Link>
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
