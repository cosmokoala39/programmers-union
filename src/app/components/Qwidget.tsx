'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState,useEffect } from 'react';


interface Article  {
  title: string;
  href: string;
};
export default function Qwidget() {
  const pollUrl = 'https://www.staradvertiser.com/staradvertiser-poll/will-a-federal-lawsuit-against-the-navy-over-its-red-hill-fuel-spill-prevail/';
  const pollResultUrl = `${pollUrl}?pollresult`;
  const imageSrc = 'https://www.staradvertiser.com/wp-content/plugins_redesign/cmd-hsa-big-q/class/images/big-q-logo.png';
  const imageWebp = 'https://www.staradvertiser.com/wp-content/plugins_redesign/cmd-hsa-big-q/class/images/big-q.webp';
    const [hover, setHover] = useState(false);
    //for add section
    // const script = document.createElement('script');
    // script.src = 'https://cdn.jwplayer.com/libraries/YourPlayerID.js'; // Replace with your player ID
    // script.async = true;
    // script.onload = () => {
    //   if (window.jwplayer) {
    //     window.jwplayer('jwplayer-container').setup({
    //       file: 'https://cdn.jwplayer.com/videos/YourVideoID.mp4', // Replace with your video URL or JW Video ID
    //       image: 'https://cdn.jwplayer.com/thumbs/YourThumbnail.jpg', // Optional thumbnail
    //       width: '100%',
    //       aspectratio: '16:9',
    //       floating: {
    //         mode: 'always',
    //       },
        
    //     });
    //    }
    //   }
      const [articles, setArticles] = useState<Article[]>([]);
    useEffect(() => {
    const fetchArticles = async () => {
      fetch('/articles/article2.json')
        .then((res) => res.json())
        .then((data) => setArticles(data));
    };

    fetchArticles();
  }, []);
  return (
    <>
    <div className='container mb-5'><div className='row lg-margine'>
    <div className="widget container big-q news-story bg-light-blue p-3 text-center mb-5">
      <Link href={pollUrl} className="d-block mb-3">
        <picture>
          <source srcSet={imageWebp} type="image/webp" />
          {/* Image must have "unoptimized" when loading external sources */}
          <Image
            src={imageSrc}
            alt="Big Q logo"
            width={40}
            height={43}
            loading="lazy"
            unoptimized
          />
        </picture>
      </Link>

      <h3 className="story-title fs-4 mb-3">
        <Link href={pollUrl} className="text-decoration-none text-dark">
          Will a federal lawsuit against the Navy over its Red Hill fuel spill prevail?
        </Link>
      </h3>

      <Link href={pollUrl} className="button mb-3" title="Vote Now">
        Vote Now
      </Link>
      
      <Link href={pollResultUrl} className="d-block mt-2 hover-link" style={{fontSize:'13px'}}>
        View Results
      </Link>
    </div>
    <div className='col-12 col-lg-8 border-end mb-5 mb-lg-0'>
    <div className="container-fluid text-white py-5 px-4 px-md-5 mb-4 position-relative hide-from-subscribers">
      {/* Content Layer */}
      <div className="position-relative align-items-center text-center text-md-start" style={{ zIndex: 1 }}>
        {/* Logo */}
        <div className="mb-2">
          <Image
            src="https://www.staradvertiser.com/wp-content/themes/hsa-redesign/images/sa-logo-large.png"
            alt="image"
            className="img-fluid"
            style={{
              width: 'clamp(150px, 15vw, 200px)',
              maxWidth: '200px',
            }}
            width={200}
            height={50}
            priority
          />
        </div>

        {/* Text & Button */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <h3
            className="fs-1 mb-4 mb-md-2"
            style={{
              fontFamily: `'Source Serif Pro', Helvetica, Arial, sans-serif`,
              color: '#1C1A1A',
            }}
          >
            Unlimited Local Stories,<br /> One Simple Subscription
          </h3>

          <Link
            href="#"
            target="_blank"
            className="button px-4 py-2 py-md-3 rounded-5"
            data-ab-beacon-test-id="1"
            data-bs-toggle="tooltip"
            title="Opens a new tab"
          >
            SUBSCRIBE&nbsp;
            <span ><i className="fa fa-square-arrow-up-right" style={{fill:'white'}}></i></span>
            <span className="visually-hidden">Opens in a new tab</span>
          </Link>
        </div>
      </div>

      {/* Background Images */}
      <Image
        src="https://www.staradvertiser.com/wp-content/themes/hsa-redesign/images/sa-subscribe-background-867x252.webp"
        alt="image"
        className="w-100 h-100 position-absolute top-0 start-0 d-block d-md-none"
        style={{ objectFit: 'cover' }}
        fill
        sizes="100vw"
        priority
      />
      <Image
        src="https://www.staradvertiser.com/wp-content/themes/hsa-redesign/images/sa-subscribe-background-867x252.webp"
        alt="image"
        className="w-100 h-100 position-absolute top-0 start-0 d-none d-md-block"
        style={{ objectFit: 'cover' }}
        fill
        sizes="100vw"
        priority
      />
    </div>
    </div>
    <div className="col-12 col-lg-4">
            <div className="native">
                <div className="section-heading-green">
                    <h2 ><Link href="/partner-videos" 
                    title="See more Partner Videos" 
                    className='widget-heading-green'
                     style={{ color: hover ? 'black' : '#15a741' }}
                     onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)} 
                     >
                    From Our Partners</Link></h2>
                </div>
            </div>
            <div className="mb-5">
              <div id="jwplayer-container" className="jwplayer" />
            </div>
            <div className="mb-5">
             <div className="section-heading">
               <h2>
                 <Link
                   href="#"
                   className="text-decoration-none breaking-news-head"
                   style={{ color: hover ? 'black' : '#1562A7' }}
                   onMouseEnter={() => setHover(true)}
                   onMouseLeave={() => setHover(false)} 
                 >
                   Kokua Line <span><i className="fas fa-chevron-right"></i></span>
                 </Link>
               </h2>
             </div>

             {articles.map((article, index) => (
               <article
                 key={index}
                 className="news-story border-bottom pb-2 mb-2 clearfix"
               >
                 <h3 className="story-title h6 mb-0">
                   <Link
                     href={article.href}
                     title={article.title}
                     className="text-dark text-decoration-none font"
                     style={{fontSize:'18px',fontWeight:'550'}}
                   >
                     {article.title}
                   </Link>
                 </h3>
               </article>
             ))}
           </div>
        </div>
        
    </div></div>
    </>
  );
}
