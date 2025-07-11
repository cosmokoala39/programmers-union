

'use client';

import Link from "next/link";



export default function ShareToolbar() {
  
  return (
    <ul className="share col-12 col-md-1 sticky-top sticky-md-top list-unstyled">
      <li className="dropdown">
        <Link
          className="detail-share-button"
          title="Share this story"
          href="#"
          role="button"
          id="shareSocialMediaLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="fa fa-share-alt" />
        </Link>
      </li>

      <li>
        <Link title="Comment on this story" href="#section-before-comments" className="detail-share-button">
          <i className="fa-solid fa-message"></i>
        </Link>
      </li>
      <li>
        <Link
        className="detail-share-button"
          title="Print this story"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.print();
          }}
        >
          <i className="fa-solid fa-print"></i>
        </Link>
      </li>
      
    </ul>
  );
}
