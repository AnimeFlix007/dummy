import Image from "next/image";

const OurCompany = () => {
  return (
    <div className="home-company-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="company-content">
              <div className="company-tittle">
                <span>Our Company</span>
                <h2>
                  We are an ecosystem of digital marketing experts, content,
                  influencers and brands.
                </h2>

                <p>
                  As a digital agency, Footprynt takes up the A-Z in digital
                  marketing and gives you a packaged solution, cost effectively.
                </p>
                <p>
                  As a social media influencer agency, Footprynt helps brands to
                  launch campaigns by connecting brands with influencers to
                  create authentic, engaging and out-of-the-box content.
                </p>
                <p>
                  With our Influencer network, we match you with influencers -
                  who are just right for you - to create unique, action driven
                  content for your brand.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="company-img">
              <Image quality={90}  
                loading="lazy"
                src="/images/company-img.jpg"
                alt="company"
                width={600}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
