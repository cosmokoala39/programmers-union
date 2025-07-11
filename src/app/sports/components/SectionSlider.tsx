'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './SectionSlider.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface SectionItem {
  title: string;
  href: string;
  external?: boolean;
}

export default function SectionSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [sections, setSections] = useState<SectionItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/sports/sections.json');
      const data = await res.json();
      setSections(data);
    };
    fetchData();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft += 200;
  };

  return (
    <div className="container mb-5">
      <div className="topics-container position-relative">
        <div className="gradient-fade gradient-left" />
        <div className="gradient-fade gradient-right" />

        <div className="topics-carousel-wrapper d-flex align-items-center">
          <button onClick={scrollLeft} className="custom-arrow custom-arrow-left mx-2">
            <span><i className="fas fa-chevron-left"></i></span>
          </button>

          <div className={`${styles['section-slider-wrapper']}`} ref={scrollRef}>
            <div className={styles['scroll-inner']}>
              <div className={`${styles['section-pill-sec']} fw-bold`}>Sections</div>
              {sections.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    target={item.external ? '_blank' : '_self'}
                    rel={item.external ? 'noopener noreferrer' : ''}
                    className={`${styles['section-pill']} ${isActive ? styles['active'] : ''}`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <button onClick={scrollRight} className="custom-arrow custom-arrow-right mx-2">
            <span><i className="fas fa-chevron-right"></i></span>
          </button>
        </div>
      </div>
    </div>
  );
}
