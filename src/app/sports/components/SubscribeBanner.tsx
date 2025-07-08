import Image from 'next/image';
import Link from 'next/link';

export default function SubscribeBanner() {
  return (
    <div className="col-12 mb-4 hide-from-subscribers">
      <div className=" p-3 p-lg-4 text-center" style={{backgroundColor:'#e5f6ff',borderRadius:'3px'}}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '200px', margin: '0 auto' }}>
          <Image
            src="https://www.staradvertiser.com/wp-content/themes/hsa-redesign/images/sa-logo-app.webp"
            alt="star"
            width={70}
            height={70}
            className="img-fluid"
          />
        </div>
        <h5 className="fw-bold mt-3">
          Unlimited access to premium stories for as little as{' '}
          <span className="text-success">$12.95 /mo.</span>
        </h5>
        <Link
          href="https://gateway.staradvertiser.com"
          className="button fs-5"
          
          
        //   onClick={() => {
        //     if (typeof window !== 'undefined') {
        //       window?.matherSubcribeClickEvent?.();
        //       window?.hsaGTMEvent?.('event', 'click', {
        //         event_category: 'Sports Section Front',
        //         event_label: 'Sports Section Front Subscribe Banner',
        //       });
        //     }
        //   }}
        >
          Get It Now
        </Link>
      </div>
    </div>
  );
}
