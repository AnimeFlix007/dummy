import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-area pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="content">
              <div className="logo">
                <Link href="/" aria-label="footprynt">
                  <Image
                    quality={90}
                    loading="lazy"
                    src="/images/fp_business_logo_3.png"
                    alt="footer-logo"
                    width={300}
                    height={75}
                  />
                </Link>
              </div>
              <p>Digital Marketing/Influencer Marketing</p>
              <div className="subscribe">
                <form className="newsletter-form">
                  <input
                    type="email"
                    id="emails"
                    className="form-control"
                    placeholder="Your Email"
                    name="EMAIL"
                    required
                  />
                  <button className="box-btn" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>

              <ul className="social">
                <li>
                  <a
                    href="https://www.linkedin.com/company/padhchin-it-and-marketing/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="linkedin"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/footpryntapp"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="facebook"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/influencernews4"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="twitter"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/footprynt_india?igshid=YzdkMWQ2MWU="
                    target="_blank"
                    rel="noreferrer"
                    aria-label="instagram"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="content ml-15">
              <h3>Our Services</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/solutions-details">Influencer Marketing</Link>
                </li>
                <li>
                  <Link href="/solutions-details">Social Media Marketing</Link>
                </li>
                <li>
                  <Link href="/solutions-details">
                    SEO, CRO &amp; Content Management
                  </Link>
                </li>
                <li>
                  <Link href="/solutions-details">Marketing Automation</Link>
                </li>
                <li>
                  <Link href="/solutions-details">
                    Media buying and selling
                  </Link>
                </li>
                <li>
                  <Link href="/solutions-details">Campaign Analytics</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="content">
              <h3>Quick Links</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/faq">FAQs</Link>
                </li>
                <li>
                  <Link href="#">Career</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy & Policy</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="content contacts">
              <h3 className="ml-40">Contact Us</h3>
              <ul className="footer-list foot-social">
                <li>
                  <a href="tel:+1975456789">
                    <i className="bx bx-phone"></i> +91 98921 12515
                  </a>
                </li>
                <li>
                  <a href="mailto:sales@footprynt.in">
                    <i className="bx bxs-envelope"></i> sales@footprynt.in
                  </a>
                </li>
                <li>
                  <a href="mailto:admin@footprynt.in">
                    <i className="bx bxs-envelope"></i> admin@footprynt.in
                  </a>
                </li>
                <li>
                  <a href="https://maps.google.com/maps?q=India">
                    <i className="bx bxs-map"></i> Borivali, Mumbai, India
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul className="menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About</Link>
                </li>
                <li>
                  <Link href="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link href="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-6">
              <p className="right">
                Copyright &copy; {currentYear} Footprynt. All Rights Reserved by{" "}
                <a
                  href="https://footprynt.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Padhchin Technologies Pvt. Ltd.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
