'use client';

import { useEffect } from 'react';

export default function TaboolaWidget() {
  useEffect(() => {
    // Load Taboola script
    if (typeof window !== 'undefined') {
      window._taboola = window._taboola || [];
      window._taboola.push({
        mode: 'thumbnails-sectionfront',
        container: 'taboola-below-sectionfront-thumbnails',
        placement: 'Below sectionfront Thumbnails',
        target_type: 'mix',
      });
    }
  }, []);

  return (
    <div className="mb-5">
      <div className="section-heading">
        <h2>
          <a href="#" className='subheading'>You might also like</a>
        </h2>
      </div>

      {/* Taboola container */}
      <div
        id="taboola-below-sectionfront-thumbnails"
        className="d-block trc_related_container tbl-trecs-container trc_spotlight_widget trc_elastic trc_elastic_thumbnails-sectionfront"
        data-placement-name="Below sectionfront Thumbnails"
      ></div>
    </div>
  );
}
