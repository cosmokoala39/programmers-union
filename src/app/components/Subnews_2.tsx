'use client';
import { useState,useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const heading={
    title : 'NEIGHBOR ISLANDS',
    url : ''
}
interface Article {
  title: string;
  url: string;
  image: string;
  width: number;
  height: number;
  date: string;
  showOnSmall?: boolean;
}
export default function Subnews_2(){
    const [articles, setArticles] = useState<Article[]>([]);
    const [hover, setHover] = useState(false);
    useEffect (()=>{
        fetch('/articles/article1.json')
        .then((res) => res.json())
        .then((data) => setArticles(data));
    },[])
    return(
        <div className='container mb-5 font'>
            <div className="row lg-margin">
              <div className="col-12">
                <div className="section-heading">
                  <h2 className='breaking-news-head'>
                    <Link href={heading.url}
                     onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)} 
                    className='text-decoration-none' style={{ color: hover ? 'black' : '#1562A7' }}
                    >
                    
                       {heading.title} <span><i className="fas fa-chevron-right"></i></span>

                    </Link>
                  </h2>
                </div>
              </div>

              {articles.map((article, index) => (
                <div
                  key={index}
                  className={`col-12 col-md-6 col-lg-3 ${index > 0 ? 'border-start' : ''}`}
                >
                  {index > 0 && <div className="border-top d-block d-md-none"></div>}
                  <article className="news-story mb-3 clearfix ">
                    <div className={`thumbnail med ${!article.showOnSmall ? 'd-none d-md-block' : ''}`}>
                      <Link href={article.url}>

                          <Image
                            src={article.image}
                            alt={article.title}
                            width={article.width}
                            height={article.height}
                            className="w-100 d-block"
                          />

                      </Link>
                    </div>
            
                    <h3 className="story-title my-2">
                      <Link href={article.url} className='text-decoration-none text-black '>
                        {article.title}
                      </Link>
                    </h3>
            
                    <ul className="byline list-unstyled text-secondary " style={{fontSize:'12px',fontFamily:'sans-serif'}}>
                      <li>{article.date}</li>
                    </ul>
                  </article>
                </div>
              ))}
            </div>
            </div>
    )
}