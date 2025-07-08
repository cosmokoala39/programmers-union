"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiFontSize } from "react-icons/bi";
// import "./LookingBack.css"; 

export default function LookingBack() {
  return (
    <div className="news-archive-right mb-5">
      <div className="section-heading">
        <h2>
          <Link href="//www.staradvertiser.com/back-issues/" className="text-decoration-none subheading">
            Looking Back <span><i className="fa fa-chevron-right"></i></span>
          </Link>
        </h2>
      </div>

      <article className="news-story">
        <div className="thumbnail mb-2">
          <a
            href="https://www.newspapers.com/article/honolulu-star-advertiser-july-11-1991/174948472/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://www.staradvertiser.com/wp-content/uploads/2025/06/20250620_WEB_-HA-A1-July-12-1991.jpg"
              alt="Hawaii solar eclipse newspaper"
              width={400}
              height={300}
              className="img-fluid w-100 h-auto"
            />
            <span className="visually-hidden">Opens in a new tab</span>
          </a>
        </div>

        <div >
          <a
          className="story-title font sidebar-text"
            href="https://www.newspapers.com/article/honolulu-star-advertiser-july-11-1991/174948472/"
            target="_blank"
            rel="noopener noreferrer"
            title="Opens a new tab"
            data-bs-toggle="tooltip"
            data-placement="auto"
            
          >
            July 11, 1991: Hawaii gets a view of total solar eclipse
            <span className="visually-hidden">Opens in a new tab</span>
          </a>
        </div>
      </article>
    </div>
  );
}
