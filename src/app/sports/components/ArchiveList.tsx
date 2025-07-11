import Image from 'next/image';
import Link from 'next/link';

interface ArchiveItem {
  title: string;
  href: string;
  image: string;
  date: string;
  updated: string;
  author?: string;
  excerpt?: string;
  slug?:string;
}

export default function ArchiveList({ items }: { items: ArchiveItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <article
          key={item.title}
          className="news-story archive border-bottom pb-3 mb-3 clearfix row"
        >
          {/* Image column */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <Link href={item.href} title={item.title}>
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-100 h-auto d-block"
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </div>

          {/* Text content column */}
          <div className="col-12 col-md-8">
            <h3 className="my-2">
              <Link className="story-title font" href={item.href} title={item.title}>
                {item.title}
              </Link>
            </h3>

            <div className="d-flex flex-wrap align-items-center update-font section-author" style={{ fontSize: '12px' }}>
              {item.author && (
                <p className="me-3 mb-1" style={{ fontSize: '13px' }}>
                  <strong>By {item.author}</strong>
                </p>
              )}
              <p className="mb-1">
                {item.date}
                <span className="fst-italic text-danger ms-2">Last updated {item.updated}</span>
              </p>
            </div>

            {item.excerpt && (
              <p className="mt-2 mb-0" style={{ fontSize: '0.938em', lineHeight: '1.333em' }}>
                {item.excerpt}{' '}
                <Link className="fw-bold" href={item.href}>
                  Read more
                </Link>
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
