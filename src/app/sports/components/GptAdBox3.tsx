'use client';

import { useEffect } from 'react';

export default function GptAdBox3() {
  useEffect(() => {
    // Ensure googletag exists
    if (typeof window !== 'undefined' && window.googletag?.cmd) {
      window.googletag.cmd.push(function () {
        window.googletag.display('div-gpt-ad-box-3');
      });
    }
  }, []);

  return (
    <div className="ad-code-home-widget">
      <div className="row mb-4 mb-lg-5">
        <div
          id="div-gpt-ad-box-3"
          className="div-gpt-container promo-sm-container mx-auto"
          style={{ height: '280px' }}
        >
          {/* GPT script will insert iframe ad here */}
        </div>
      </div>
    </div>
  );
}









