"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


const articles = [{
  
       id: 1,
            title: 'Hawaii lawmakers demand immigration arrest briefings',
            excerpt: 'Three of Hawaii’s four congressional delegates sent a letter to the U.S. Department of Homeland Security condemning “aggressive immigration enforcement actions” in the islands, demanding basic information about arrests and deportations.',
            img: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_hirono-Schatz-Tokuda-mugs.jpg',
            url: 'https://www.staradvertiser.com/2025/07/03/hawaii-news/hawaii-lawmakers-demand-immigration-arrest-briefings/',
            author: { name: 'Peter Boylan', profile: '/author/Peter-Boylanr' },
            updated: '12:12 a.m.'
          },
          {
            id: 2,
            title: 'Trump’s tax-cut and spending bill clears Congress',
            img: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_2025-07-03T200933Z_168001148_RC27FFAT8IEY_RTRMADP_3_USA-CONGRESS-TAX-300x200.jpg',
            url: 'https://www.staradvertiser.com/2025/07/03/breaking-news/trumps-tax-cut-and-spending-bill-clears-congress/',
            updated: '12:21 a.m.'
          },
          {
            id: 3,
            title: 'FBI pursuing cyber-gang in Hawaiian Airlines hack',
            img: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_CTY-airline-outlook-7931.jpg',
            url: 'https://www.staradvertiser.com/2025/07/03/hawaii-news/fbi-pursuing-cyber-gang-in-hawaiian-airlines-hack/',
            updated: '11:52 p.m.'
          },
           {
            id: 4,
            title: 'Luxury restaurant, owner decry $3.15M abuse verdict',
            img: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_money-cash-bills-IWP3LIXGYJMFPPMZEHRZFCUKYY-300x184.jpg',
            url: 'https://www.staradvertiser.com/2025/07/03/hawaii-news/luxury-restaurant-owner-decry-3-15m-abuse-verdict/',
            updated: '12:07 a.m.'
          },
           {
            id: 5,
            title: '$3.3M in renovations aimed at Ala Wai Golf Course',
            img: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_CTY-ala-wai-footbridge-6-300x200.jpg',
            url: 'https://www.staradvertiser.com/2025/07/03/hawaii-news/3-3m-in-renovations-aimed-at-ala-wai-golf-course/',
            updated: '11:59 p.m. '
          },
          // Add more articles as needed
        ];
const breakingNews = [
  {
    title: 'DOH responds to 300-gallon fuel leak at Joint Base Pearl Harbor-Hickam',
    link: 'https://www.staradvertiser.com/2025/07/02/breaking-news/doh-responds-to-300-gallon-fuel-leak-at-joint-base-pearl-harbor-hickam/',
    time: '6:05 p.m.',
    image: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_8988436.jpg',
  },
  {
    title: '7 missing after fireworks warehouse explosions, fire in California',
    link: 'https://www.staradvertiser.com/2025/07/01/breaking-news/6-maui-men-arrested-for-internet-related-sexual-offenses-against-children-2/',
    time: '7:24 p.m.',
    image: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_20250702_brk_cal01.jpg',
  },
  {
    title: 'House Republicans advance toward vote on Trump’s tax-cut bill',
    link: 'https://www.staradvertiser.com/2025/07/02/breaking-news/republicans-tee-up-house-vote-on-trump-bill-outcome-uncertain/',
    time: '9:58 a.m.',
    image: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_2025-07-02T174731Z_180692286_RC2HEFAC1MXL_RTRMADP_3_USA-CONGRESS-TAX-300x200.jpg',
  },
  {
    title: 'Hawaii joins lawsuit against Trump over Medicaid data shared with ICE',
    link: 'https://www.staradvertiser.com/2025/07/01/breaking-news/hawaii-joins-lawsuit-against-trump-over-medicaid-data-shared-with-ice/',
    time: '2:50 p.m.',
    image: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_2025-04-29T142120Z_3_LYNXMPEL3S0QU_RTROPTP_3_USA-TRUMP-JOBS-LAWSUIT.JPG',
  },
  {
    title:'Motorcyclist, 22, dies in high-speed crash in Kailua',
    link: 'https://www.staradvertiser.com/2025/07/02/breaking-news/motorcyclist-22-dies-in-high-speed-crash-in-kailua/',
    time: '6:53 a.m.',
    image: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_TKTK22-WEB-Honolulu-EMS-ambulancea-1--300x177.jpg'
  },
  {
    title:'New interstellar object A11pI3Z surprises astronomers with size',
    link: 'https://www.staradvertiser.com/2025/07/02/breaking-news/new-interstellar-object-a11pi3z-surprises-astronomers-with-size/',
    time: '2:33 p.m',
    image: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_20250702_brk_rub01.jpg'
  },
  {
    title:'Maui police employee, 5 others arrested in child sex sting',
    link: 'https://www.staradvertiser.com/2025/07/01/breaking-news/6-maui-men-arrested-for-internet-related-sexual-offenses-against-children-2/',
    time: '7:02 a.m.',
    image: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_043023-WEB-Maui-police-car-600x354.jpg'
  },
  {
    title:'Diddy to remain jailed ahead of sentencing, judge rules',
    link: 'https://www.staradvertiser.com/2025/07/02/breaking-news/diddy-convicted-of-prostitution-counts-acquitted-of-sex-trafficking/',
    time: ' 12:05 p.m.',
    image: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_20250702_brj_did01-300x190.jpg'
  },
  {
    title:'Bryan Kohberger pleads guilty to murders of 4 Idaho students',
    link: 'https://www.staradvertiser.com/2025/07/02/breaking-news/bryan-kohberger-pleads-guilty-to-murders-of-4-idaho-students/',
    time: ' 9:39 a.m.',
    image: 'https://www.staradvertiser.com/wp-content/uploads/2025/07/web1_20250702_brk_bko01.jpg'
  }
  
  // Add more articles as needed...
]
const popularArticles = [
  {
    title: 'Jury awards $3.15M to aspiring chef abused by boss',
    href: 'https://www.staradvertiser.com/2025/07/02/hawaii-news/jury-awards-3-15m-to-aspiring-chef-abused-by-boss/?utm_rs=AP_Ni7WxtWPQOeRjgmExmtcnA',
  },
  {
    title: 'Motorcyclist, 22, dies in high-speed crash in Kailua',
    href: 'https://www.staradvertiser.com/2025/07/02/breaking-news/motorcyclist-22-dies-in-high-speed-crash-in-kailua/?utm_rs=AP_Ni7WxtWPQOeRjgmExmtcnA',
  },
  {
    title:
      '7 missing after fireworks warehouse explosions, fire in California',
    href: 'https://www.staradvertiser.com/2025/07/02/breaking-news/7-missing-after-fireworks-warehouse-explosions-fire-in-california/?utm_rs=AP_Ni7WxtWPQOeRjgmExmtcnA',
  },
  {
    title:
      'Diddy to remain jailed ahead of sentencing, judge rules',
    href: 'https://www.staradvertiser.com/2025/07/02/breaking-news/diddy-convicted-of-prostitution-counts-acquitted-of-sex-trafficking/?utm_rs=AP_Ni7WxtWPQOeRjgmExmtcnA',
  },
  {
    title:
      'Bryan Kohberger pleads guilty to murders of 4 Idaho students',
    href: 'https://www.staradvertiser.com/2025/07/02/breaking-news/bryan-kohberger-pleads-guilty-to-murders-of-4-idaho-students/?utm_rs=AP_Ni7WxtWPQOeRjgmExmtcnA',
  },
  //Add more articles as needed...
];
export default function News(){
    const [hover, setHover] = useState(false);
    return(
    <>
    {/* <Head>
    
    </Head> */}
        <div className="container mb-5  font">
            <div className="row row-cols-1 row-cols-md-3 mb-5 row">
                <div className="col-12 col-lg-5 col-xl-6 border-start border-end mb-5 mb-lg-0 order-1 order-lg-2">
                  {articles.map((article, index) => (
                    <article
                        key={article.id}
                        className={`news-story ${index === 0 ? 'text-center feature' : 'clearfix d-flex'} border-bottom pb-3 mb-3`}
                      >
                        {/* Image block */}
                        <div
                          className={`${index === 0 ? 'thumbnail mx-auto' : 'thumbnail small me-3 mb-0 d-none d-md-block'}`}
                          style={{
                            position: 'relative',
                            width: index === 0 ? '100%' : '100px',
                            height: index === 0 ? '407px' : '63px'
                          }}
                        >
                          <a
                            href={article.url}
                            title={article.title}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={article.img}
                              alt={article.title}
                              fill
                              className="d-block"
                              style={{ objectFit: 'cover' }}
                            />
                          </a>
                        </div>
                        
                        {/* Content block */}
                        {index === 0 ? (
                          // First article
                          <>
                            <h3 className="my-2 fw-bold text-dark" >
                              <a
                                href={article.url}
                                className="d-block text-decoration-none text-black"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {article.title}
                              </a>
                            </h3>
                            {article.excerpt && (
                              <p className="excerpt mb-3">{article.excerpt}</p>
                            )}
                            <ul className="byline list-unstyled d-flex flex-wrap justify-content-center">
                              {article.author && (
                                <li className="text-secondary">
                                  By{' '}
                                  <Link
                                    href={article.author.profile}
                                    className="text-decoration-none text-secondary hover-link"
                                  >
                                    {article.author.name}
                                  </Link>
                                </li>
                              )}
                              <li className="fst-italic text-danger ms-3">
                                • Last updated {article.updated}
                              </li>
                            </ul>
                          </>
                        ) : (
                          // Other articles
                          <div className="flex-grow-1">
                            <h3 className="story-title mb-2 article-font" >
                              <a
                                href={article.url}
                                className="d-block text-decoration-none text-black"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {article.title}
                              </a>
                            </h3>
                            {article.excerpt && (
                              <p className="excerpt mb-3">{article.excerpt}</p>
                            )}
                            <ul className="byline list-unstyled d-flex flex-wrap">
                              {article.author && (
                                <li className="text-secondary">
                                  By{' '}
                                  <Link
                                    href={article.author.profile}
                                    className="text-decoration-none text-secondary hover-link"
                                  >
                                    {article.author.name}
                                  </Link>
                                </li>
                              )}
                              <li className="fst-italic text-danger ms-3">
                                • Last updated {article.updated}
                              </li>
                            </ul>
                          </div>
                        )}
                      </article>

                  ))}
                </div>
                 <div className="col-12 col-lg-3 mb-5 mb-lg-0 order-2 order-lg-1">
                 <div className="section-heading">
                   <h2 className='breaking-news-head mt-2' >
                     <Link href="https://www.staradvertiser.com/category/breaking-news/" className='text-decoration-none' style={{ color: hover ? 'black' : '#1562A7' }}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}  >
                       Breaking News <span><i className="fas fa-chevron-right"></i></span>
                       </Link>
                   </h2>
                 </div>

                 {breakingNews.map((article, index) => (
                   <article
                     key={index}
                     className="news-story border-bottom pb-3 mb-3 clearfix"
                     data-mrf-recirculation="breaking-news"
                   >
                     <div className="thumbnail small me-3 mb-3 d-none d-md-block float-start">
                       <Link href={article.link} title={article.title}>
                         <Image
                           src={article.image}
                           alt={article.title}
                           width={70}
                           height={47}
                         />
                       </Link>
                     </div>
                
                     <h3 className="story-title mb-2 breaking-news">
                       <Link href={article.link} title={article.title} className='text-black text-decoration-none'>
                         {article.title}
                       </Link>
                     </h3>
                
                     <ul className="byline">
                       <li className="fst-italic text-danger me-3">Last updated {article.time}</li>
                     </ul>
                   </article>
                 ))}

                 <Link
                   className="d-block button"
                   href="/category/breaking-news/"
                   title="See more from Breaking News"
                 >
                   See More Breaking News <span><i className="fas fa-chevron-right"></i></span>
                 </Link>
               </div>
               <div className="col-12 col-lg-4 col-xl-3 order-3">
                {/* Today's Paper */}
                <div className="todays-paper mb-5 clearfix "style={{fontFamily:'sans-serif'}}>
                  <a
                   className='no-underline text-dark d-block"'
                    href="https://gateway.staradvertiser.com"
                    title="View today's newspaper"
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
                    <span className="visually-hidden">Opens in a new tab</span>
                  </a>
                  <a
                    className="text-decoration-none text-dark d-block mt-2 lh-1 "
                    href="https://gateway.staradvertiser.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                  >
                    <strong>View Todays Paper</strong>
                    <span className="visually-hidden">Opens in a new tab</span>
                  </a>
                  <small className="d-block my-2 lh-1">
                    Subscribe today to read the newspaper online.
                  </small>
                  <a
                    className="button-3"
                    href="https://gateway.staradvertiser.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Subscribe Now
                    <span className="visually-hidden">Opens in a new tab</span>
                  </a>
                </div>

                {/* Ad Widget */}
                <div className="ad-code-home-widget">
                  <div className="row mb-4 mb-lg-5">
                    <div
                      id="div-gpt-ad-box-1"
                      className="div-gpt-container promo-sm-container mx-auto"
                      style={{ height: '280px' }}
                    >
                      {/* You can inject ad script via useEffect if needed */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `
                            <iframe id="google_ads_iframe_/22692889424/Hawaii/HSA/Box_0"
                              title="3rd party ad content"
                              width="300" height="250"
                              frameborder="0"
                              style="border: 0px; vertical-align: bottom;"
                              scrolling="no"
                              marginwidth="0" marginheight="0"
                              aria-label="Advertisement"
                            ></iframe>
                          `,
                        }}
                      />
                    </div>
                  </div>
                </div>
                      
                {/* Subscriber Favorites */}
                <div className="mb-4">
                  <div className="section-heading ">
                    <h2 className='subscriber-favorite'>Subscriber Favorites</h2>
                  </div>
                      
                  <div className="cmg_most_popular_widget-2 d-flex flex-column">
                    {popularArticles.map((article, index) => (
                      <article
                        key={index}
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
                          <h3 className=" mb-0 my-3">
                            <a
                            className='story-title lh-1'
                              href={article.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {article.title}
                            </a>
                          </h3>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
                  
                {/* Bottom Ad */}
                <div className="ad-code-home-widget">
                  <div className="row mb-4 mb-lg-5">
                    <div
                      id="div-gpt-ad-tile-1"
                      className="div-gpt-container promo-sm-container mx-auto"
                      style={{ height: '100px', display: 'none' }}
                    >
                      <div id="google_ads_iframe_/22692889424/Hawaii/HSA/Tile_0__container__"></div>
                    </div>
                  </div>
                </div>
                  
                {/* MidWeek Image */}
                <div className="textwidget">
                  <a
                    title="Flip through MidWeek online"
                    href="https://midweek-hi.newsmemory.com/?editionStart=MidWeek"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="mb-2"
                      src="https://sa-media.s3.us-east-1.amazonaws.com/images/mw-latest-edition-300x100.gif"
                      alt="Flip through MidWeek online"
                      width={300}
                      height={100}
                      unoptimized
                    />
                    <span className="visually-hidden">Opens in a new tab</span>
                  </a>
                </div>
              </div>
            </div>
        </div>
    </>
    )
}