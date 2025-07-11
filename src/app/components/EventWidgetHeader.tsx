import Link from "next/link";


export default function EventWidgetHeader ()  {
   
  return (
    <div className="header mb-3">
      <div className="header-name-wrapper">
        <div className="header-name section-heading d-flex justify-content-between align-items-center flex-wrap">
          <Link
            target="_top"
            rel="noopener noreferrer"
            href="https://www.staradvertiser.com/calendar/"
            className="subheading"
           
          >
            Upcoming Events
          </Link>

          <span className="d-flex gap-2">
            <Link
              className="text-decoration-none text-black  d-flex align-items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.staradvertiser.com/calendar/"
              style={{fontSize:'14px'}}
            >
              <i className="fa-regular fa-calendar"></i>
              <span className="all-events"> See All Events</span>
            </Link>

            <Link
              className="text-decoration-none text-black d-flex align-items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
              style={{fontSize:'14px'}}
              href="https://hub.cityspark.com/event/submission/staradvertiser?utm_medium=internal&utm_source=widget&utm_campaign=add-ev"
            >
              <i className="fa fa-plus" />
              <span className="all-events">Add your event</span>
            </Link>
          </span>
        </div>
      </div>

      <div className="header-pager" />
    </div>
  );
};


