'use client';

import { useEffect } from 'react';

const GoogleAdBox = () => {
    
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const googletagScript = document.getElementById('gpt-script');
    if (!googletagScript) {
      const script = document.createElement('script');
      script.id = 'gpt-script';
      script.async = true;
      script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
      document.head.appendChild(script);

    //   script.onload = () => {
    //     window.googletag = window.googletag || { cmd: [] };
    //     window.googletag.cmd.push(() => {
    //       window.googletag.defineSlot(
    //         '/22692889424/Hawaii/HSA/Box_3',
    //         [300, 250],
    //         'div-gpt-ad-box-4'
    //       ).addService(window.googletag.pubads());

    //       window.googletag.enableServices();
    //       window.googletag.display('div-gpt-ad-box-4');
    //     });
    //   };
    }
  }, []);

  return (
    <div className="ad-code-home-widget">
      <div className="row mb-4 mb-lg-5">
        <div
          id="div-gpt-ad-box-4"
          className="div-gpt-container promo-sm-container mx-auto"
          style={{ height: '280px' }}
        />
      </div>
    </div>
  );
};

export default GoogleAdBox;
