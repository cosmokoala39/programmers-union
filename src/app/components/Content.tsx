'use client';

import 'weather-icons/css/weather-icons.min.css';

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