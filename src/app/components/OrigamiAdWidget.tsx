'use client';

import { useEffect } from 'react';

const OrigamiAdWidget = () => {
  useEffect(() => {
    const scriptId = 'origami-ad-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://origami.secure.ownlocal.com/origami-widget.js';
      script.async = true;
      script.setAttribute('data-ad-size', '300x250');
      script.setAttribute('data-ad-container-ids', 'origami-ad-container-7-days,origami-ad-container-30-days');
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="textwidget">
      <div
        id="origami-HpMa6Y1s"
        data-partner-id="11d8bf01-4a0d-42f1-9c82-39f1b7726234"
        className="w-100 text-center"
        style={{
          display: 'inline-block',
          minHeight: '250px',
          minWidth: '300px',
        }}
      >
        <iframe
          style={{
            position: 'relative',
            boxShadow: '0 0 10px rgba(0,0,0,0.15)',
            margin: '0 auto 20px',
            border: 'none',
          }}
          data-ad-id="9910c4e0-5ecf-455f-9db8-92dcc3e1ddb0"
          data-unit-env="production"
          data-base-path="https://origami.secure.ownlocal.com/origami_unit/index.html"
          data-disable-map="false"
          data-widget-type="origami"
          width="300px"
          height="250px"
          title="Origami Ad"
        />
      </div>
    </div>
  );
};

export default OrigamiAdWidget;
