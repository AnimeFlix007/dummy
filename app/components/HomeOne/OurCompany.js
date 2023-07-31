import Link from "next/link";
import Image from "next/image";

const OurCompany = () => {
  return (
    <div className="home-company-area bg-color">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="company-content">
              <div className="company-tittle">
                <span>Our Company</span>
                <h2>
                  A healthy ecosystem of marketing experts, content
                  professionals, influencers and brands
                </h2>

                <p>
                  Footprynt takes up the A-Z of digital marketing, and offers
                  you a cost-effective, packaged solution.
                </p>
                <p>
                  As a Social Media Influencer agency, Footprynt helps brands to
                  launch campaigns by connecting them with the right
                  influencers, to create authentic, engaging and out-of-the-box
                  content.
                </p>
              </div>

              <Link href="/about-us" legacyBehavior>
                <a className="box-btn">Know More</a>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="company-img">
              <Image
                // quality={90}
                loading="lazy"
                src="/images/company-img.jpg"
                alt="company"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
