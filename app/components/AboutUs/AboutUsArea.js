
import Image from "next/image";
const AboutUsArea = () => {
  return (
    <div className="home-company-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="company-content">
              <div className="company-tittle">
                <span>About Us</span>
                <h2>
                  Footprynt is a digital marketing agency specialising in
                  influencer marketing, digital media buying and selling,
                  content management and creative services.
                </h2>

                <h5>1000+ campaigns executed.</h5>
                <h5>5000+ influencer videos created on Instagram.</h5>
                <h5>10000+ trended hours on Twitter.</h5>
                <h5>Google ad campaigns for the biggest dot coms.</h5>
                <h5>
                  70+ clients - 4 unicorns, 3 media conglomerates, biggest FMCG
                  brand.
                </h5>
                <h5>We are footprynt. Let&apos;s create your digital footprynt.</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="company-img">
              <Image
                quality={90}
                loading="lazy"
                src="/images/about-img-2.jpg"
                alt="company"
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

export default AboutUsArea;
