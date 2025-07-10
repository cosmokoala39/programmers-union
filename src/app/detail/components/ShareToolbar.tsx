

'use client';



export default function ShareToolbar() {
  
  return (
    <ul className="share col-12 col-md-1 sticky-top sticky-md-top list-unstyled">
      <li className="dropdown">
        <a
          className="detail-share-button"
          title="Share this story"
          href="#"
          role="button"
          id="shareSocialMediaLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="fa fa-share-alt" />
        </a>
        <ul className="dropdown-menu" aria-labelledby="shareSocialMediaLink">
          <li>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.staradvertiser.com/2025/07/07/breaking-news/fire-crews-battle-nanakuli-wildfire/"
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Facebook"
              data-bs-toggle="tooltip"
              data-bs-placement="auto"
              data-bs-original-title="Opens a new tab"
            >
              <span><i className="bi bi-facebook"></i> </span> Share on Facebook
              <span className="visually-hidden">Opens in a new tab</span>
            </a>
          </li>
          <li>
            <a
              
              href="https://twitter.com/share?url=https://www.staradvertiser.com/2025/07/07/breaking-news/fire-crews-battle-nanakuli-wildfire/&text=Fire crews battle Nanakuli wildfire via @staradvertiser"
              target="_blank"
              rel="noopener noreferrer"
              title="Share on X"
              data-bs-toggle="tooltip"
              data-bs-placement="auto"
              data-bs-original-title="Opens a new tab"
            >
              <span className="icon-x" /> Share on X
              <span className="visually-hidden">Opens in a new tab</span>
            </a>
          </li>
          <li>
            <a
              
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `mailto:?subject=Here%20is%20a%20Honolulu%20Star-Advertiser%20article%20you%20might%20like&body=I saw this article in the Honolulu Star-Advertiser and thought you might find it interesting: ${window.location.href}`;
              }}
              title="Share by email"
            >
              <span className="fa fa-envelope-o" /> Share by email
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a title="Comment on this story" href="#section-before-comments" className="detail-share-button">
          <i className="fa-solid fa-message"></i>
        </a>
      </li>
      <li>
        <a
        className="detail-share-button"
          title="Print this story"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.print();
          }}
        >
          <i className="fa-solid fa-print"></i>
        </a>
      </li>
      {/* Optional future button:
      <li>
        <a title="Bookmark this story" href="#">
          <span className="icon-bookmark" />
        </a>
      </li> */}
    </ul>
  );
}
