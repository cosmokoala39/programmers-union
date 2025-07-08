'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LocalBusinessGuide  ()  {
  return (
    <div className="my-5">
      <Link
        href="https://local.staradvertiser.com/"
        target="_blank"
        rel="noopener"
        className="w-100 d-block"
      >
        <Image
          src="https://sa-media.s3.amazonaws.com/sa_ads/localbusinessguide/SA-LocalBusinessGuide-982x300.gif"
          alt="Honolulu Local Business Guide"
          width={982}
          height={300}
          className="w-100 mb-5"
        />
        <span className="visually-hidden">Opens in a new tab</span>
      </Link>
    </div>
  );
};


