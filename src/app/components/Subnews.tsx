'use client';
import { useState,useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface Article {
  id: number;
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  author: string;
  updated: string;
  category?:string;
  date?:string;
}
export default function Subnews(){
const [articles, setArticles] = useState<Article[]>([]);
const [hover, setHover] = useState(false);


useEffect(() => {
    async function fetchData() {
      try {
        const [articlesRes] = await Promise.all([
        
          
          fetch("/data/politics.json"),
        ]);

        const [articlesData] = await Promise.all([
          articlesRes.json() as Promise<Article[]>,
          
        ]);

       
        const isValid = (article: Article) =>
          article.slug && article.title && article.image;

        setArticles(articlesData.filter(isValid));
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (

    <div className='container mb-5 font'>
    <div className="row lg-margin">
      <div className="col-12">
        <div className="section-heading">
          <h2 className='breaking-news-head'>
            <Link  href={articles[0]?.category || '#'}
             onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} 
            className='text-decoration-none' style={{ color: hover ? 'black' : '#1562A7' }}
            >
              
               {articles[0]?.category || 'Politics'}{' '} <span><i className="fas fa-chevron-right"></i></span>
              
            </Link>
          </h2>
        </div>
      </div>

      {articles.slice(0,4).map((article, index) => (
        <div
          key={index}
          className={`col-12 col-md-6 col-lg-3 ${index > 0 ? 'border-start' : ''}`}
        >
          {index > 0 && <div className="border-top d-block d-md-none"></div>}
          <article className="news-story mb-3 clearfix ">
            <div >
              <Link  href={`${article.category}/${article.slug}`}>
                
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={250}
                    height={200}
                    style={{ objectFit: 'cover' }}
                    className="w-100 d-block"
                  />
                
              </Link>
            </div>

            <h3 className="story-title my-2">
              <Link  href={`${article.category}/${article.slug}`} className='text-decoration-none text-black'>
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
  );
}