import Image from "next/image";

const MainBanner = () => {
  return (
    <div className="banner-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="banner-content">
                  <h1>A digital ecosystem of
                  brands, influencers &
                  content experts</h1>
                  <p>
                    100+ brands, 1000+ campaigns executed, 500+ M in reach! Get
                    the right mix of creative solutions and tech tools developed
                    by India’s foremost digital agency.
                  </p>
                  <div className="banner-btn">
                    <a href="/contact-us" className="box-btn">
                      Contact Us
                    </a>
                    <a href="/about-us" className="box-btn border-btn">
                      Know More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                  <Image
                    quality={90}
                    priority
                    src="/images/banner-img-1.png"
                    width={600}
                    height={500}
                    alt="banner-img"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-shape">
        <div className="shape1">
          <Image
            quality={90}
            loading="lazy"
            src="/images/shape/shape1.png"
            width={20}
            height={20}
            alt="shape"
          />
        </div>
        <div className="shape2">
          <Image
            quality={90}
            loading="lazy"
            src="/images/shape/shape2.png"
            width={20}
            height={20}
            alt="shape"
          />
        </div>
        <div className="shape3">
          <Image
            quality={90}
            loading="lazy"
            src="/images/shape/shape3.png"
            width={20}
            height={20}
            alt="shape"
          />
        </div>
        <div className="shape4">
          <Image
            quality={90}
            loading="lazy"
            src="/images/shape/shape4.png"
            width={20}
            height={20}
            alt="shape"
          />
        </div>
        <div className="shape5">
          <Image
            quality={90}
            loading="lazy"
            src="/images/shape/shape5.png"
            width={20}
            height={20}
            alt="shape"
          />
        </div>
        <div className="shape6">
          <Image
            quality={90}
            loading="lazy"
            src="/images/shape/shape6.png"
            width={20}
            height={20}
            alt="shape"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
