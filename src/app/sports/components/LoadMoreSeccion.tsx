'use client';
import Link from 'next/link';

export default function LoadMoreSection({ onLoadMore }: { onLoadMore?: () => void }) {
  return (
    <div className="text-center mb-5">
      <div className="my-3">
        <small>
          Having trouble finding what you need? Try using our{' '}
          <Link href="https://www.staradvertiser.com/search/">search</Link> feature.
        </small>
      </div>
      <button
        className=" button  px-4"
        onClick={onLoadMore}
      >
        Load more articles
      </button>
    </div>
  );
}
