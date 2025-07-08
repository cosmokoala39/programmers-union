import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Article = {
  title: string;
  url: string;
  image?: string;
  date: string;
};

type WidgetSectionProps = {
  title: string;
  url: string;
  items: Article[];
};

export default function WidgetSection({ title, url, items }: WidgetSectionProps) {
    const [hover,setHover]=useState(false)
  return (
    <div className="col-12 col-lg-4 mb-5 mb-lg-0 border-lg-start">
      <div className="section-heading">
        <h2>
          <Link href={url} className="subheading"
           style={{ color: hover ? 'black' : '#1562A7' }}
                onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}
          >
            {title} <span><i className="fa fa-chevron-right"></i></span>
          </Link>
        </h2>
      </div>

      {items.map((item, idx) => (
        <article
          key={idx}
          className={`news-story pb-3 mb-3 clearfix ${idx < items.length - 1 ? "border-bottom" : ""}`}
        >
          {item.image && (
            <div className="thumbnail">
              <Link href={item.url}>
                
                <Image
                    src={item.image}
                    alt={item.title}
                    width={350} 
                    height={250} 
                    className="w-100 d-block "
                   style={{objectFit:'cover'}}
                    sizes="(max-width: 600px) 100vw, 600px"
                  />
              </Link>
            </div>
          )}

          <h6 className="story-title my-2">
            <Link className="font story-title" href={item.url}>{item.title}</Link>
          </h6>

          <ul className="byline list-unstyled">
            <li className="update-font">{item.date}</li>
          </ul>
        </article>
      ))}
    </div>
  );
}
