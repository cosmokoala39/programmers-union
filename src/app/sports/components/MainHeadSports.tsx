import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface Post {
  title: string;
  href: string;
  image: string;
  author: string;
  authorUrl: string;
  date: string;
  updated: string;
  excerpt: string;
  comments?: number;
}

export default function MainPostWithNextPosts() {
  const [mainPost, setMainPost] = useState<Post | null>(null);
  const [nextPosts, setNextPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const main = await fetch('/sports/mainPost.json').then(res => res.json());
      const next = await fetch('/sports/nextPosts.json').then(res => res.json());
      setMainPost(main);
      setNextPosts(next);
    };
    fetchData();
  }, []);

  if (!mainPost) return <div>Loading...</div>;

  return (
    <div className="container mb-2">
      <div className="row lg-margin">
        {/* Main Post */}
        <div className="col-12 col-lg-6 mb-4">
          <article className="h-100 w-100 news-story archive">
            <div className="thumbnail h-auto">
              <Link href={mainPost.href} title={mainPost.title}>
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
                <Link className='story-title' href={mainPost.href} title={mainPost.title}>{mainPost.title}</Link>
              </h3>
              <ul className="byline list-unstyled d-flex">
                <li className="custom_byline me-2 update-font">
                  By <Link className='update-font hover-link text-decoration-none' href={mainPost.authorUrl}>{mainPost.author}</Link>
                </li>
                <li className="me-2 update-font">{mainPost.date}</li>
                <li className="fst-italic text-danger me-2" style={{fontSize:'12px'}}>Last updated {mainPost.updated}</li>
              </ul>
              <p className="excerpt mt-3 mb-0">
                {mainPost.excerpt} <Link className="fw-bold" href={mainPost.href}>Read more</Link>
              </p>
            </div>
          </article>
        </div>

        {/* Four Next Posts */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="container pb-4 p-0">
            <div className="row g-4">
              {nextPosts.map((post, index) => (
                <div className="col-12 col-md-6" key={index}>
                  <article className="h-100 w-100 news-story archive">
                    <div className="thumbnail h-auto">
                      <Link href={post.href} title={post.title}>
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
                        <Link className='story-title' href={post.href} title={post.title}>{post.title}</Link>
                      </h3>
                      <ul className="list-unstyled d-flex" style={{ lineHeight: '20px' }}>
                        <li className="custom_byline update-font" style={{fontSize:'12px'}}>By <Link className='update-font hover-link text-decoration-none' style={{fontSize:'12px'}} href={post.authorUrl}>{post.author}</Link></li>
                        <li className="me-2 update-font" style={{fontSize:'12px'}}>{post.date}</li>
                        <li className="fst-italic text-danger me-2" style={{fontSize:'12px'}}>Last updated {post.updated}</li>
                      </ul>
                      <p className="excerpt mt-3 mb-0">
                        {post.excerpt} <Link className="fw-bold" href={post.href}>Read more</Link>
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
