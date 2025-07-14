import Link from "next/link"

export default function Mainheading() {
  return (
    <div className="masthead container my-3 mb-md-0">
      <div className="row align-items-center text-center text-lg-start">
        {/* Left ad (desktop only) */}
        <div className="d-none d-lg-block col-lg-4">
          <div
            id="div-gpt-ad-ear-left"
            className="promo-sm-container"
            style={{ width: '320px' }}
          >
            <div
              id="google_ads_iframe_/22692889424/Hawaii/HSA/Ear_0__container__"
              style={{ border: 0, margin: 'auto', textAlign: 'center' }}
            >
              <iframe
                title="3rd party ad content"
                width="300"
                height="100"
                scrolling="no"
                marginWidth={0}
                marginHeight={0}
                frameBorder={0}
                aria-label="Advertisement"
                style={{ border: 0, verticalAlign: 'bottom' }}
              />
            </div>
          </div>
        </div>

        {/* Center Title + Date + Weather - visible on all screen sizes */}
        <div className="col-12 col-md-6 col-lg-4 mx-auto pt-1 text-allign-center">
          <h1 className="w-100 px-5 me-2"><Link href="https://melonpost.org" className="text-dark text-decoration-none">MELONPOST</Link></h1>
          <p className="mt-2 me-3">
            <small className="d-flex justify-content-around flex-wrap ">
              <span>Saturday, July 12, 2025</span>
              <span>
                <Link className="text-decoration-none" href="#">
                  <i className="wi wi-night-clear h6"></i>
                  <span className="text-black">&nbsp;77°</span>
                </Link>
              </span>
              
            </small>
          </p>
        </div>

        {/* Right ad (desktop only) */}
        <div className="d-none d-lg-block col-lg-4 text-end">
          <div
            id="div-gpt-ad-ear-right"
            className="promo-sm-container mx-auto mx-md-0 ms-md-auto"
            style={{ width: '320px' }}
          >
            <div
              id="google_ads_iframe_/22692889424/Hawaii/HSA/Ear_1__container__"
              style={{ border: 0, margin: 'auto', textAlign: 'center' }}
            >
              <iframe
                title="3rd party ad content"
                width={300}
                height={100}
                scrolling="no"
                marginWidth={0}
                marginHeight={0}
                frameBorder={0}
                aria-label="Advertisement"
                style={{ border: 0, verticalAlign: 'bottom' }}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
