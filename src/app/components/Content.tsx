'use client';

import 'weather-icons/css/weather-icons.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRef} from 'react';
import '@/app/globals.css';

const topics = [
  'Maui Wildfires', 'Red Hill', 'Jury awards $3.15M',
  'Trump cuts', 'Hawaii budget', 'Health', 'Crave', 'Kokua line','hawaii prep world'
];

export default function Content () {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };
    return(
        <>
        <div className="masthead container my-3 mb-md-0">
      <div className="row">
       
        <div className="d-none d-lg-block col-4">
          <div
            id="div-gpt-ad-ear-left"
            className="promo-sm-container"
            style={{ width: '320px' }}
            data-google-query-id="CJHozPiCno4DFcikZgIdw9I2gw"
          >
            <div
              id="google_ads_iframe_/22692889424/Hawaii/HSA/Ear_0__container__"
              style={{ border: 0, margin: 'auto', textAlign: 'center' }}
            >
              <iframe
                id="google_ads_iframe_/22692889424/Hawaii/HSA/Ear_0"
                name="google_ads_iframe_/22692889424/Hawaii/HSA/Ear_0"
                title="3rd party ad content"
                width="300"
                height="100"
                scrolling="no"
                marginWidth={0}
                marginHeight={0}
                frameBorder={0}
                aria-label="Advertisement"
                tabIndex={0}
                allow="private-state-token-redemption;attribution-reporting"
                style={{ border: 0, verticalAlign: 'bottom' }}
                data-load-complete="true"
                data-google-container-id="2"
              />
            </div>
          </div>
        </div>

        
        <div className="d-none d-md-block col-6 col-lg-4 mx-auto text-lg-center pt-1">
          <div>
            <Link href="https://www.staradvertiser.com">
              <Image
                className="w-100"
                src="https://sa-media.s3.us-east-1.amazonaws.com/images/sa-logo.svg"
                alt="Honolulu Star-Advertiser"
                title="Honolulu Star-Advertiser"
                width={416}
                height={88.75}
              />
            </Link>
            <h1 style={{
              border: 0,
              clip: 'rect(0 0 0 0)',
              height: '1px',
              margin: '-1px',
              overflow: 'hidden',
              padding: 0,
              position: 'absolute',
              width: '1px'
            }}>
              Honolulu Star-Advertiser
            </h1>
          </div>
          <p className="mt-2">
            <small className="d-flex justify-content-around">
              <span>Tuesday, July 1, 2025</span>
              <span>
                <a className="text-decoration-none" href="https://www.staradvertiser.com/hawaii-weather">
                  <i className="wi wi-night-clear h6"></i>
                  <span className='text-black'>
                  &nbsp;77°
                  </span>
                </a>
              </span>
              <span>
                <a className='text-black' href="https://printreplica.staradvertiser.com/"> Todays Paper</a>
              </span>
            </small>
          </p>
        </div>

        
        <div className="d-none d-lg-block col-12 col-md-6 col-lg-4 text-md-end">
          <div
            id="div-gpt-ad-ear-right"
            className="promo-sm-container mx-auto mx-md-0 ms-md-auto"
            style={{ width: '320px' }}
            data-google-query-id="CIHZyviCno4DFdmZ2AUdXt8syA"
          >
            <div
              id="google_ads_iframe_/22692889424/Hawaii/HSA/Ear_1__container__"
              style={{ border: 0, margin: 'auto', textAlign: 'center' }}
            >
              <iframe
                id="google_ads_iframe_/22692889424/Hawaii/HSA/Ear_1"
                name="google_ads_iframe_/22692889424/Hawaii/HSA/Ear_1"
                title="3rd party ad content"
                width={300}
                height={100}
                scrolling="no"
                marginWidth={0}
                marginHeight={0}
                frameBorder={0}
                aria-label="Advertisement"
                tabIndex={0}
                allow="private-state-token-redemption;attribution-reporting"
                style={{ border: 0, verticalAlign: 'bottom' }}
                data-load-complete="true"
                data-google-container-id="3"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>

      <div className="container my-3">
        <div className="topics-container position-relative">
          <button onClick={() => scroll('left')} className="splide__arrow custom-arrow custom-arrow-left mx-2">
            <span><i className="fas fa-chevron-left"></i></span>
          </button>

          <div className="topics-carousel-wrapper">
            
            <div className="gradient-fade gradient-left" />
            <div className="gradient-fade gradient-right" />
            <div className="topics-carousel d-flex gap-3 overflow-auto" ref={scrollRef}>
              {topics.map((topic, index) => (
                <div className="topic-pill flex-shrink-0" key={index}>{topic}</div>
              ))}
            </div>
           
          </div>
               <button onClick={() => scroll('right')} className="splide__arrow custom-arrow custom-arrow-right mx-2">
            <span><i className="fas fa-chevron-right"></i></span>
          </button>
          
        </div>
      </div>
 
    </>
    )
}