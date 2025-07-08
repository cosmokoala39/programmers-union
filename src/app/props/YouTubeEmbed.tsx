'use client';
import { useState } from 'react';
import Image from 'next/image';


type YouTubeEmbedProps = {
  playlistId: string;
  thumbnailUrl: string;
  title: string;
  headingLink?: string;
  headingText?: string;
  svgSize?: string; // e.g. '4em'
};

const YouTubeEmbed = ({
  playlistId,
  thumbnailUrl,
  title,
  headingLink,
  headingText,
  svgSize = '4em',
}: YouTubeEmbedProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
    const [hover, setHover] = useState(false);
  return (
    <div className="col-12 col-md-6 my-5">
      {headingLink && headingText && (
        <div className="section-heading">
          <h2>
            <a
                style={{ color: hover ? 'black' : '#1562A7' }}
                onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)} 
              className='subheading'
              href={headingLink}
              target="_blank"
              rel="noopener noreferrer"
              title={headingText}
            >
              {headingText} <span><i className="fas fa-chevron-right"></i></span>
              <span className="visually-hidden">Opens in a new tab</span>
            </a>
          </h2>
        </div>
      )}

      <div
        className="ratio ratio-16x9 position-relative h-100 w-100"
        onClick={() => setShowVideo(true)}
        style={{ cursor: 'pointer' }}
      >
        {showVideo ? (
          <iframe
            src={embedUrl}
            title={title}
            allowFullScreen
            loading="lazy"
            className="w-100 h-100 border-0"
          />
        ) : (
          <>
            <Image
               src={thumbnailUrl}
               alt={title}
               fill
               priority={false}
               style={{ objectFit: 'contain' }}
               sizes="(max-width: 768px) 100vw, 50vw"
               unoptimized // Only needed if the domain is NOT in next.config.js
             />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{
                height: svgSize,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fill: '#ffffff',
                opacity: 0.75,
                zIndex: 2,
              }}
            >
              <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
            </svg>
          </>
        )}
      </div>
    </div>
  );
};

export default YouTubeEmbed;
