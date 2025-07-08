'use client';

import { useEffect } from 'react';

export default function OrigamiAd() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://origami.secure.ownlocal.com/origami-widget.js';
    script.id = 'origami-ad-widget';
    script.async = true;
    script.setAttribute('data-ad-size', '300x250');
    script.setAttribute('data-ad-container-ids', 'origami-ad-container-7-days,origami-ad-container-30-days');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="textwidget">
      <div
        data-partner-id="11d8bf01-4a0d-42f1-9c82-39f1b7726234"
        className="mb-4"
        id="origami-FWCjWLl3"
        style={{ display: 'inline-block', minHeight: '250px', minWidth: '300px' }}
      >
        <iframe
          style={{
            position: 'relative',
            boxShadow: '0 0 10px rgba(0,0,0,0.15)',
            margin: '0 auto 20px',
            border: '0 none',
          }}
          data-ad-id="565ce6e4-1ae2-4169-a62f-126278c5e697"
          data-unit-env="production"
          data-base-path="https://origami.secure.ownlocal.com/origami_unit/index.html"
          data-disable-map="false"
          data-widget-type="origami"
          height="250px"
          width="300px"
          data-ignore-impression="1"
        ></iframe>
      </div>
    </div>
  );
}
