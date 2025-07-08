'use client';

import { useRef, useState, useEffect } from 'react';
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

export default function EventCarousel({ eventsUrl = '/articles/event.json' }: Props) {
  const [events, setEvents] = useState<EventItem[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    fetch(eventsUrl)
      .then((res) => res.json())
      .then(setEvents)
      .catch(console.error);
  }, [eventsUrl]);

  return (
    <div className="container my-4">
      <div className="topics-container position-relative">
        <button onClick={() => scroll('left')} className="custom-arrow-1 custom-arrow-left mx-2">
          <span>
            <i className="fas fa-chevron-left"></i>
          </span>
        </button>

        <div className="topics-carousel-wrapper">
          <div className="gradient-fade gradient-left" />
          <div className="gradient-fade gradient-right" />
          <div className="topics-carousel d-flex gap-3 overflow-auto" ref={scrollRef}>
            {events.map((event, index) => (
              <a
                key={index}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none flex-shrink-0"
                style={{ width: '220px' }}
              >
                <div className="card border-0 shadow-sm" style={{ height: '180px' }}>
                  <div
                    className="event-image"
                    style={{
                      backgroundImage: `url(${event.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '130px',
                      position: 'relative'
                    }}
                  >
                    <div
                      className="text-white small date-bg"
                      style={{ position: 'absolute', width: '100%', fontSize: '10px' }}
                    >
                      {event.date}
                    </div>
                  </div>
                  <div className="card-body p-2">
                    <p className="lh-1 card-font-1 mb-1">{event.name}</p>
                    <p className="card-font mb-0">{event.venue}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <button onClick={() => scroll('right')} className="custom-arrow-1 custom-arrow-right mx-2">
          <span>
            <i className="fas fa-chevron-right"></i>
          </span>
        </button>
      </div>
      <Calender />
    </div>
  );
}
