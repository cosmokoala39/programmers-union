'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Subnews(){
    const Heading1 = {
        title:'War in the Middle East',
        url: 'https://www.staradvertiser.com/tag/war-in-the-middle-east/',
    }
  const articles = [
    {
      title: 'Iran suspends cooperation with U.N. nuclear watchdog',
      date: 'July 2, 2025',
      url: 'https://www.staradvertiser.com/2025/07/02/breaking-news/iran-suspends-cooperation-with-u-n-nuclear-watchdog/',
      image: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_20250702_brk_rmg01-300x190.jpg',
      width: 300,
      height: 190,
      showOnSmall: true,
    },
    {
      title: 'U.N. inspector: Iran could restart uranium enrichment within months',
      date: 'June 30, 2025',
      url: 'https://www.staradvertiser.com/2025/06/30/breaking-news/u-n-inspector-iran-could-restart-uranium-enrichment-within-months/',
      image: 'https://www.staradvertiser.com/wp-content/uploads/2025/06/web1_20250630_brk_tru01-300x190.jpg',
      width: 300,
      height: 190,
      showOnSmall: false,
    },
    {
      title: 'U.K. police studying Glastonbury performances after anti-Israel chants',
      date: 'June 29, 2025',
      url: 'https://www.staradvertiser.com/2025/06/29/breaking-news/u-k-police-studying-glastonbury-performances-after-anti-israel-chants/',
      image: 'https://www.staradvertiser.com/wp-content/uploads/2025/06/web1_2025-06-29T001301Z_345545482_RC2ZBFAHODDN_RTRMADP_3_MUSIC-GLASTONBURY-300x200.jpg',
      width: 300,
      height: 200,
      showOnSmall: false,
    },
    {
      title: 'Israel orders evacuations in northern Gaza as Trump calls for war to end',
      date: 'June 29, 2025',
      url: 'https://www.staradvertiser.com/2025/06/29/breaking-news/israel-orders-evacuations-in-northern-gaza-as-trump-calls-for-war-to-end/',
      image: 'https://www.staradvertiser.com/wp-content/uploads/2025/06/web1_2025-06-29T182632Z_559630068_RC2HCFAYSHWE_RTRMADP_3_ISRAEL-PALESTINIANS-GAZA-300x200.jpg',
      width: 300,
      height: 200,
      showOnSmall: false,
    },
  ];
const [hover, setHover] = useState(false);
  return (

    <div className='container mb-5 font'>
    <div className="row lg-margin">
      <div className="col-12">
        <div className="section-heading">
          <h2 className='breaking-news-head'>
            <Link href={Heading1.url}
             onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} 
            className='text-decoration-none' style={{ color: hover ? 'black' : '#1562A7' }}
            >
              
               {Heading1.title} <span><i className="fas fa-chevron-right"></i></span>
              
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
              <Link href={article.url} className='text-decoration-none text-black'>
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