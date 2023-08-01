import Image from "next/image";

const CaseStudies = () => {
  return (
    <div className="home-case ptb-100" style={{ marginTop: "1.5rem" }}>
      <div className="container">
        <div className="section-title">
          <span>Case Studies</span>
          <h2>Have a look at our Work Showcase</h2>
        </div>
        <div className="row row case-list" style={{  
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"
          }}>
          <div className="col-lg-4 col-sm-6">
            <div className="casecard">
              <div className="single-case">
                <div className="case-img">
                  <a href="/case-studies-details/2">
                    <Image
                      quality={90}
                      loading="lazy"
                      src="/images/case-studies/pharmeasy1.jpg"
                      alt="case"
                      className="caseimage"
                      width={500}
                      height={300}
                    />
                  </a>
                </div>
                <div className="content">
                  <a href="/case-studies-details/2">
                    <h3>Pharmeasy Youtube Channel</h3>
                  </a>
                  <p>
                    Doctors and wellness experts created videos for the brand’s
                    YouTube channel. Campaign to drive awareness for Type 1
                    Diabetes through influencer marketing.
                  </p>
                  <a className="line-bnt" href="/case-studies-details/2">
                    View Project Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="casecard">
              <div className="single-case">
                <div className="case-img">
                  <a href="/case-studies-details/1">
                    <Image
                      quality={90}
                      loading="lazy"
                      src="/images/case-studies/stockal1.jpg"
                      alt="case"
                      className="caseimage"
                      width={500}
                      height={300}
                    />
                  </a>
                </div>
                <div className="content">
                  <a href="/case-studies-details/1">
                    <h3>
                      {" "}
                      Promoting Download of App through financial influencers
                    </h3>
                  </a>
                  <p>
                    KYC/Login entries for Stockal - a Global Investing App -
                    with influencer collaborations. Platform used - Instagram
                    and Youtube.
                  </p>
                  <a className="line-bnt" href="/case-studies-details/1">
                    View Project Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="casecard">
              <div className="single-case">
                <div className="case-img">
                  <a href="/case-studies-details/0">
                    <Image
                      quality={90}
                      loading="lazy"
                      src="/images/case-studies/asianpaints1.jpg"
                      alt="case"
                      className="caseimage"
                      width={500}
                      height={300}
                    />
                  </a>
                </div>
                <div className="content">
                  <a href="/case-studies-details/0">
                    <h3>Asian Paints Promoting new age DIY products</h3>
                  </a>
                  <p>
                    Launch of DIY products by Asian Paints by collaborating with
                    DIY and home decor experts. Platform used - Youtube.
                  </p>
                  <a className="line-bnt" href="/case-studies-details/0">
                    View Project Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="case-btn text-center" style={{ marginTop: "1.5rem" }}>
          <p>
            Check out more of our amazing cases <a href="#">View More</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
