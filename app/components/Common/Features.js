import Link from "next/link";
import Image from "next/image";

const Features = () => {
  return (
    <div className="feature-area bg-color ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contnet">
              <div className="feature-tittle">
                <span>Features</span>
                <h2>Take a look at latest features offered by Footprynt</h2>
              </div>

              <ul>
                <li>
                  <i className="bx bxs-badge-check"></i>
                  Advertising Technology Solutions Approach
                </li>
                <li>
                  <i className="bx bxs-badge-check"></i>
                  Technological Consultation for Marketing
                </li>
                <li>
                  <i className="bx bxs-badge-check"></i>
                  Meet &amp; Greet - Clients and Influencers
                </li>
                <li>
                  <i className="bx bxs-badge-check"></i>
                  Roadmap to Influencer Marketing
                </li>
                <li>
                  <i className="bx bxs-badge-check"></i>
                  Digital Marketing Course Creation
                </li>
              </ul>

              <Link href="/contact-us" legacyBehavior>
                <a className="box-btn">Let&apos;s Talk!</a>
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="feature-img">
              <Image
                quality={90}
                priority
                src="/images/feature-img.png"
                alt="feature"
                width={600}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
