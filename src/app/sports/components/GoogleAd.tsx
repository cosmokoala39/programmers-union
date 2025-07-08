// components/GoogleAd.tsx
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function GoogleAdBox1() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.googletag?.cmd) {
      window.googletag.cmd.push(() => {
        window.googletag.display('div-gpt-ad-box-1');
      });
    }
  }, []);

  return (
    <div className="ad-code-home-widget">
      <div className="row mb-4 mb-lg-5">
        <div
          id="div-gpt-ad-box-1"
          className="div-gpt-container promo-sm-container mx-auto"
          style={{ height: '280px' }}
        ></div>

        {/* Load GPT script if not already loaded */}
        <Script
          id="gpt-script"
          strategy="afterInteractive"
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />
      </div>
    </div>
  );
}
