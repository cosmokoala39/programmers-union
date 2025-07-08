// components/STNPlayer.tsx
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function STNPlayer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window._sendtonews = window._sendtonews || [];
    }
  }, []);

  return (
    <>
      {/* Player container */}
      <div
        className="s2nPlayer-qYxs2yfk mb-5"
        data-type="barker"
        data-stn-player="qYxs2yfk"
      />

      {/* STN embed script */}
      <Script
        strategy="afterInteractive"
        src="//embed.sendtonews.com/player2/embedcode.php?fk=qYxs2yfk&cid=13479&SIZE=400&floatwidth=400"
        data-type="s2nScript"
      />
    </>
  );
}
