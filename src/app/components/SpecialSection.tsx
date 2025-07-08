'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SpecialSection ()  {
  return (
    <div className="mb-5">
      <Link
        href="https://staradvertiser-hi.newsmemory.com/ssindex.php"
        target="_blank"
        rel="noopener noreferrer"
        className="d-block w-100"
      >
          <Image
          src="https://sa-media.s3.us-east-1.amazonaws.com/images/redesign/SpecialSections-homepage.gif"
          alt="Explore our special sections"
          width={1200}
          height={100}
          className="d-block w-100 mb-5"
        />
        <span className="visually-hidden">Opens in a new tab</span>
      </Link>
    </div>
  );
};
