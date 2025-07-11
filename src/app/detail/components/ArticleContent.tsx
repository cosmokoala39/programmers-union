'use client';
import Image from "next/image";
import Link from "next/link";
interface Article {
  title: string;
  description: string;
  excerpt: string;
  image: string;
  slug: string;
}

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div id="article-content" className="post col-12 col-md-11 clearfix">
      {/* Paywall content */}
      <div className="hsa-paywall">
        <h2>{article.title}</h2>
       
        {/* Display the image from the article */}
        <Image
          src={article.image}
          alt={article.title}
          className="img-fluid"
          layout="responsive" // or "intrinsic", depending on your layout needs
          width={800} // replace with actual width
          height={600} // replace with actual height
        />
         
      </div>
      <p>{article.excerpt}</p>
      <div>{article.description}</div>
      {/* Comments section */}
      <span id="section-before-comments"></span>
      <div className="comments-wrapper my-5 clearfix">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item border-0">
            <div
              id="comments-tab"
              className="comment-toggle"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={{
                background: '#e5f6ff',
                color: '#29547b',
                padding: '0.75em 1.5em',
                cursor: 'pointer'
              }}
            >
              <div id="comment-arrow" className="rotate float-end">
                <span className="fa fa-chevron-right fs-3 text-primary"></span>
              </div>
              <div id="comments-count" className="fw-bold text-uppercase small">
                <span className="fa fa-commenting me-2"></span>1 Comments
              </div>
            </div>

            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div id="comments" className="comments-area bg-light">
                <div id="comments-rules-container" className="p-4 text-secondary small">
                  <p className="mb-3">
                    By participating in online discussions you acknowledge that you have agreed to the{' '}
                    <Link href="https://www.staradvertiser.com/about/terms-of-service/" target="_blank">
                      Terms of Service
                    </Link>
                    . An insightful discussion of ideas and viewpoints is encouraged, but comments must be civil and
                    in good taste, with no personal attacks. If your comments are inappropriate, you may be banned
                    from posting. Report comments if you believe they do not follow our{' '}
                    <Link href="https://www.staradvertiser.com/comment-guidelines/" target="_blank">guidelines</Link>.
                  </p>
                  <p>
                    Having trouble with comments?{' '}
                    <Link href="https://www.staradvertiser.com/comment-faqs/" target="_blank">Learn more here</Link>.
                  </p>
                </div>

                <div id="comments-container" className="p-4">
                  <div className="satalk-login-link mb-4">
                    <Link
                      className="btn btn-primary"
                      href="/user-access/?redirect_to=https%3A%2F%2Fwww.staradvertiser.com%2F2025%2F07%2F07%2Fbreaking-news%2Ffire-crews-battle-nanakuli-wildfire%2F"
                      target="_blank"
                    >
                      Please log in to comment
                    </Link>
                  </div>

                  <div id="coral_talk_1587959796"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
