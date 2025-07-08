'use client';

import { useEffect } from 'react';

export default function HawaiiJobsWidget  ()  {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//widgets.recruitology.com/scripts/gD12H3oM9Iqch4Y2IgeBpEqQnAvfOv.js';
    script.setAttribute('data-widget-type', 'search_bar_standard');
    script.async = true;

    document.getElementById('hawaii-jobs-widget-container')?.appendChild(script);
  }, []);

  return (
    <div className="my-5">
      {/* Job Search Widget Container */}
      <div id="hawaii-jobs-widget-container" className="w-100" />
    </div>
  );
};


