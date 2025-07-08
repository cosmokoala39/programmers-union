'use client';

import { Splide, SplideSlide,Splide as SplideInstance } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useRef } from'react';
import { useEffect, useState } from 'react';
import Calender from './Calender';

type EventItem = {
  title: string;
  image: string;
  date: string;
  name: string;
  venue: string;
  link: string;
};

type Props = {
  heading?: string;
  eventsUrl?: string; 
};

export default function EventCarousel({  eventsUrl = '/articles/event.json' }: Props) {
  const [events, setEvents] = useState<EventItem[]>([]);
  const splideRef = useRef<SplideInstance | null>(null);
     const goPrev = () => splideRef.current?.go('<');
  const goNext = () => splideRef.current?.go('>');

  useEffect(() => {
    fetch(eventsUrl)
      .then(res => res.json())
      .then(setEvents)
      .catch(console.error);
  }, [eventsUrl]);

  return (
    <div className="container my-4">
      <div className="topics-container position-relative">
          <button onClick={goPrev} className=" custom-arrow-1 custom-arrow-left mx-2"><span><i className="fas fa-chevron-left"></i></span></button>
        <div className="topics-carousel-wrapper">
      <Splide
        ref={splideRef}
        aria-label="Event Carousel"
        options={{
          perPage: 5,
          gap: '1rem',
          pagination: false,
          arrows:false,
          breakpoints: {
            1200: { perPage: 4 },
            992: { perPage: 3 },
            768: { perPage: 2 },
            576: { perPage: 1 },
          },
        }}
      >
        {events.map((event, index) => (
          <SplideSlide key={index}>
            <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="card  border-0 shadow-sm" style={{height:'180px'}}>
                <div
                  className="event-image"
                  style={{
                    backgroundImage: `url(${event.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '130px',
                    position:'relative'
                  }}>
                  <div className="text-white  small date-bg" style={{position:'absolute',width:'100%',fontSize:'10px'}}>{event.date}</div>
                </div>
                <div className="card-body p-2 ">
                  
                  <p className=" lh-1 card-font-1 mb-1">{event.name}</p>
                  <p className=" card-font  mb-0">{event.venue}</p>
                </div>
              </div>
            </a>
          </SplideSlide>
        ))}
      </Splide>
      </div>
      <button onClick={goNext}  className="custom-arrow-1 custom-arrow-right mx-2"><span><i className="fas fa-chevron-right"></i></span></button>
    </div>
    <Calender/>
    </div>
  );
}
