
'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

type EventItem = {
  title: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  link: string;
};

export default function EventSwiper() {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    fetch('/sports/events.json')
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="position-relative">
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        spaceBetween={15}
        className="swiper-container"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <Link
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex border rounded shadow-sm p-2 text-decoration-none text-dark"
              style={{ maxWidth: '100%' }}
            >
              {/* Event image */}
              <div
                className="flex-shrink-0"
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '4px'
                }}
              ></div>

              {/* Event text */}
              <div className="ms-2 d-flex flex-column overflow-hidden" style={{ width: '100%' }}>
                <div className="text-muted small mb-1">
                  {event.date} @{event.time}
                </div>
                <div
                  className="fw-bold text-truncate"
                  style={{ maxWidth: '100%' }}
                  title={event.title}
                >
                  {event.title}
                </div>
                <div
                  className="text-muted small text-truncate"
                  style={{ maxWidth: '100%' }}
                  title={event.venue}
                >
                  {event.venue}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
