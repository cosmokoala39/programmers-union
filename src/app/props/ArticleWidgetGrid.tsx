'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface Article {
  title: string;
  url: string;
  image?: string;
  date: string;
}

interface WidgetColumn {
  title: string;
  url: string;
  items: Article[];
}

interface Props {
  data: WidgetColumn[];
}

const ArticleWidgetGrid: React.FC<Props> = ({ data }) => {
    const[hover,setHover]=useState(false)
  return (
    <div className="row lg-margin">
      {data.map((widget, i) => (
        <div key={i} className={`col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 ${i !== 0 ? 'border-start' : ''}`}>
          <div className="section-heading">
            <h2>
              <a 
              className="subheading"
           style={{ color: hover ? 'black' : '#1562A7' }}
                onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}
              href={widget.url}>
                {widget.title}
                <span><i className="fa fa-chevron-right"></i></span>
              </a>
            </h2>
          </div>

          {widget.items.map((item, j) => (
            <article
              key={j}
              className={`news-story pb-3 mb-3 clearfix border-bottom ${j > 0 ? 'd-none d-sm-block' : ''}`}
            >
              {item.image && (
                <div className="thumbnail">
                  <a href={item.url}>
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={350} 
                        height={250} 
                        className="w-100 d-block "
                       style={{objectFit:'cover'}}
                        sizes="(max-width: 600px) 100vw, 600px"
                      />
                  </a>
                </div>
              )}
              <h3 className="story-title my-2 font">
                <a className='story-title' href={item.url} title={item.title}>
                  {item.title}
                </a>
              </h3>
              <ul className="byline list-unstyled">
                <li className='update-font'>{item.date}</li>
              </ul>
            </article>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ArticleWidgetGrid;
