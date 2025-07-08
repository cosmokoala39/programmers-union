'use client';

import { useEffect, useState } from 'react';
import { Splide, SplideSlide,Splide as SplideInstance } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import styles from './SectionSlider.module.css';
import { usePathname } from 'next/navigation';
import { useRef } from'react';
interface SectionItem {
  title: string;
  href: string;
  external?: boolean;
}

export default function SectionSlider() {
    const splideRef = useRef<SplideInstance | null>(null);
     const goPrev = () => splideRef.current?.go('<');
  const goNext = () => splideRef.current?.go('>');
  const [sections, setSections] = useState<SectionItem[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/sports/sections.json');
      const data = await res.json();
      setSections(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mb-5">
        <div className="topics-container position-relative">
          
                <div className="gradient-fade gradient-left" />
                <div className="gradient-fade gradient-right" />
             <div className="topics-carousel-wrapper">
                <button onClick={goPrev} className="splide__arrow custom-arrow custom-arrow-left mx-2"><span><i className="fas fa-chevron-left"></i></span></button>
                <div className={`${styles['section-slider-wrapper']}`}>
                  <Splide
                  ref={splideRef}
                    options={{
                         
                      type: 'slide',
                      perPage: 5,
                      gap: '1px',
                      arrows: false,
                      pagination: false,
                      drag: 'free',
                      breakpoints: {
                        1200: { perPage: 4 },
                        768: { perPage: 2 },
                      },
                    }}
                    aria-label="Section Page Menu"
                  >
                    <SplideSlide>
                      <span className={`${styles['section-pill-sec']} fw-bold `}>Sections</span>
                    </SplideSlide>
                
                    {sections.map((item, index) => {
                      const isActive = pathname === item.href;
                      return (
                        <SplideSlide key={index}>
                          <a
                            
                            href={item.href}
                            target={item.external ? '_blank' : '_self'}
                            rel={item.external ? 'noopener noreferrer' : ''}
                            className={`${styles['section-pill']} ${isActive ? styles['active'] : ''}  `}
                          >
                            {item.title}
                          </a>
                        </SplideSlide>
                      );
                    })}
                  </Splide>
                </div>
                <button onClick={goNext}  className="splide__arrow custom-arrow custom-arrow-right mx-2"><span><i className="fas fa-chevron-right"></i></span></button>
               </div>
                </div>
            </div> 
    
  );
}
