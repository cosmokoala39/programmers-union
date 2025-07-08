'use client';
import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Optional: validate email before submitting
    if (!email || !email.includes('@')) return;

    // Open the PHP form endpoint in a new tab with POST data
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/resources/newsletter/email_list_signup.php';
    form.target = '_blank';

    const emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'joinEmail';
    emailInput.value = email;
    form.appendChild(emailInput);

    const listInput = document.createElement('input');
    listInput.type = 'hidden';
    listInput.name = 'joinList';
    listInput.value = '28141';
    form.appendChild(listInput);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setSubmitted(true);
  };

  return (
    <div className="email-form rounded my-3 px-4 py-3 bg-light">
      <div className="row">
        {/* Left Column */}
        <div className="col-12 col-md-6 mb-2 mb-md-0 text-center text-md-start">
          <h6 className="fs-4 mt-0 mb-1"><strong>Don't miss out on what's happening!</strong></h6>
          <p className="email-form-blurb m-0">
            Stay in touch with breaking news, as it happens, conveniently in your email inbox. It's FREE!
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 pt-2">
          <form onSubmit={handleSubmit} className="email">
            <div className="input-group">
              <label htmlFor="bnSignUpEmail" className="visually-hidden">Email</label>
              <input
                type="email"
                name="joinEmail"
                id="bnSignUpEmail"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Enter your email"
                aria-describedby="email-widget-button"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                id="email-widget-button"
                className="button"
              >
                Sign Up
              </button>
            </div>
          </form>
          {submitted && (
            <div id="bn-signup-msg" className="validationMsg text-success fs-6 mt-1 d-block text-center">
              Thank you for signing up!
            </div>
          )}
        </div>

        {/* Terms & Privacy Notice */}
        <div className="col-12 mt-3">
          <small className="d-block text-muted lh-sm">
            By clicking to sign up, you agree to Star-Advertiser's and Google's{' '}
            <a href="https://www.staradvertiser.com/about/terms-of-service/" target="_blank" rel="noopener noreferrer">
              Terms of Service <span><i className="fa fa-square-arrow-up-right"></i></span>
            </a>{' '}
            and{' '}
            <a href="https://www.staradvertiser.com/about/privacy-policy/" target="_blank" rel="noopener noreferrer">
              Privacy Policy <span><i className="fa fa-square-arrow-up-right"></i></span>
            </a>. This form is protected by reCAPTCHA.
          </small>
        </div>
      </div>
    </div>
  );
}
