import Footer from "@/app/components/_App/Footer";
import Navbar from "@/app/components/_App/Navbar";
import PageBanner from "@/app/components/Common/PageBanner";
import Head from "next/head";
import Image from "next/image";

const Team = () => {
  return (
    <>
      <Head>
        <title>Influencer Discovery</title>
        <meta
          name="description"
          content="Increases brand awareness & reach, Builds credibility & trust, Saves cost & time, Improves sales & marketing,
                Boosts sharing potential on SM, Enriches content strategy, Track prospective influencers, Get your message across your target audience, Niche & Trending influencers,
                Partner only with quality and authentic influencers, Find creators similar to top influencers"
        />
        <meta
          name="og:title"
          property="og:title"
          content="social media marketing,social media marketing agency,social media marketing platforms,best social media marketing agency,influencer discovery platform,
                influencer collaboration platform,influencer analytics platform,influencer brand analysis,influencer campaign analytics,social media influencer analytics platform,campaign management in digital marketing,
                campaign management digital marketing,campaign management platform,marketing automation platforms,marketing campaign management software open source"
        />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
      />

      <div className="team-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our team</h2>
            <p>
              A team of digital marketing experts with experience in building
              advertising tech products, creating digital campaigns, influencer
              campaigns and marketing automation.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="team-img" style={{ position: "relative" }}>
                  <Image
                    quality={90}
                    fill
                    loading="lazy"
                    src="/images/team/pratik.jpg"
                    alt="team"
                  />
                </div>
                <div className="team-content">
                  <h3>Pratik Gour</h3>
                  <p>Director, Marketing</p>

                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/pratik.gour1986">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/iamgroot86">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:pratik@footprynt.in">
                        <i className="bx bxs-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/pratikgour1986/">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="team-img" style={{ position: "relative" }}>
                  <Image
                    quality={90}
                    fill
                    loading="lazy"
                    src="/images/team/anand.jpg"
                    alt="team"
                  />
                </div>
                <div className="team-content">
                  <h3>Anand Thakur</h3>
                  <p>Director, Product Development</p>

                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/anandrthakur8">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/_iamthakur">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:anand@footprynt.in">
                        <i className="bx bxs-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/anandrthakur">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="team-img" style={{ position: "relative" }}>
                  <Image
                    quality={90}
                    fill
                    loading="lazy"
                    src="/images/team/manoj.jpg"
                    alt="team"
                  />
                </div>

                <div className="team-content">
                  <h3>Manoj Ampolu</h3>
                  <p>Director, Technical Architect</p>
                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/iitm.manoj">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/ManojAmpolu">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:manoj@footprynt.in"
                        target="mailto:manoj@footprynt.in"
                      >
                        <i className="bx bxs-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/manoj_ampolu/"
                        target="https://www.instagram.com/manoj_ampolu/"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
