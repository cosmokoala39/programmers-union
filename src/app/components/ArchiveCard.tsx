'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ArchiveCard = () => {
    const [hover,setHover] = useState(false)
  return (
    <div className="mb-5">
      <div className="section-heading">
        <h2>
          <Link
            className='subheading mt-0 pt-0'
            href="https://www.newspapers.com/article/honolulu-star-advertiser-july-11-1991/174948472/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: hover ? 'black' : '#1562A7' ,fontSize:'18px'}}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Archives <span><i className="fas fa-chevron-right"></i></span>
          </Link>
        </h2>
      </div>

      <div className="thumbnail">
        <article className="news-story pb-2 mb-2 clearfix">
          <div className="thumbnail mb-3">
            <Link
            
              href="https://www.newspapers.com/article/honolulu-star-advertiser-july-11-1991/174948472/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://www.staradvertiser.com/wp-content/uploads/2025/06/20250620_WEB_-HA-A1-July-12-1991.jpg"
                alt="Archives"
                width={400}
                height={250}
                className="img-fluid w-100"
              />
            </Link>
          </div>

          <h3 className="story-title">
            <Link
            className='text-decoration-none font text-black'
              href="https://www.newspapers.com/article/honolulu-star-advertiser-july-11-1991/174948472/"
              target="_blank"
              rel="noopener noreferrer"
            >
              July 11, 1991: Hawaii gets a view of total solar eclipse
            </Link>
          </h3>
        </article>
      </div>
    </div>
  );
};

export default ArchiveCard;
