import PageBanner from "@/app/components/Common/PageBanner";
import Footer from "@/app/components/_App/Footer";
import Navbar from "@/app/components/_App/Navbar";
import Head from "next/head";
import Image from "next/image";
const Testimonials = () => {
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
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
      />

      <div className="testimonials-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>What our clients say</h2>
                <p>Honest and Straightforward Feedback</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="single-testimonials">
                <div className="testimonials-head">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-5">
                      <div
                        className="testimonials-img"
                        style={{ position: "relative" }}
                      >
                        <Image
                          quality={90}
                          width={80}
                          height={80}
                          loading="lazy"
                          src="/images/clients/SnehaShenoy.jpg"
                          alt="testimonials"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-7">
                      <div className="content">
                        <h2>Sneha Shenoy</h2>
                        <span>Brand Manager - Digital MX Takatak</span>
                        <ul className="rate">
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="testimonials-foot">
                  <p>
                    Footprynt has been my go to agency in the last three jobs of
                    mine. Looking at working with them in the future.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single-testimonials">
                <div className="testimonials-head">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-5">
                      <div
                        className="testimonials-img"
                        style={{ position: "relative" }}
                      >
                        <Image
                          quality={90}
                          width={80}
                          height={80}
                          loading="lazy"
                          src="/images/clients/ChandanRoy.jpg"
                          alt="testimonials"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-7">
                      <div className="content">
                        <h2>Chandan Roy</h2>
                        <span>Sales Head - Star Sports</span>
                        <ul className="rate">
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="testimonials-foot">
                  <p>
                    Footprynt helps us add value to the brands who come onboard
                    for our properties. They bring in a niche and expertise
                    rarely seen in this industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single-testimonials">
                <div className="testimonials-head">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-5">
                      <div
                        className="testimonials-img"
                        style={{ position: "relative" }}
                      >
                        <Image
                          quality={90}
                          width={80}
                          height={80}
                          loading="lazy"
                          src="/images/clients/SmritaSingh.jpg"
                          alt="testimonials"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-7">
                      <div className="content">
                        <h2>Smrita Singh</h2>
                        <span>
                          Head - Corporate Communications - Dream Sports
                        </span>
                        <ul className="rate">
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="testimonials-foot">
                  <p>
                    Footprynt helped us increase the brand presence through
                    curated influencer campaigns
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single-testimonials">
                <div className="testimonials-head">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-5">
                      <div
                        className="testimonials-img"
                        style={{ position: "relative" }}
                      >
                        <Image
                          quality={90}
                          width={80}
                          height={80}
                          loading="lazy"
                          src="/images/clients/VinayBharathwas.jpg"
                          alt="testimonials"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-7">
                      <div className="content">
                        <h2>Vinay Bharatwaj</h2>
                        <span>Co founder - Stockal</span>
                        <ul className="rate">
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="testimonials-foot">
                  <p>
                    Stockal influencer marketing is managed by Footprynt. They
                    have a dedicated team which has worked on all our campaigns
                    with extremely good results. We can say we have achieved all
                    our goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single-testimonials">
                <div className="testimonials-head">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-5">
                      <div
                        className="testimonials-img"
                        style={{ position: "relative" }}
                      >
                        <Image
                          quality={90}
                          width={80}
                          height={80}
                          loading="lazy"
                          src="/images/clients/RohanPatil.jpg"
                          alt="testimonials"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-7">
                      <div className="content">
                        <h2>Rohan Patil</h2>
                        <span>
                          Vice President Brand Marketing - Angel Broking
                        </span>
                        <ul className="rate">
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="testimonials-foot">
                  <p>
                    The work ethic is phenomenal and the personalization even
                    better. This is the agency for all influencers I need.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single-testimonials">
                <div className="testimonials-head">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-5">
                      <div className="testimonials-img">
                        <Image
                          quality={90}
                          width={80}
                          height={80}
                          loading="lazy"
                          src="/images/clients/GibsonSequeira.jpg"
                          alt="testimonials"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-7">
                      <div className="content">
                        <h2>Gibson Sequeira</h2>
                        <span>Manager - Zee</span>
                        <ul className="rate">
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="testimonials-foot">
                  <p>
                    We have created over 2000+ videos using influencers with
                    footprynt. The team is enthusiastic and very efficient with
                    their work. The volume of the work and the quality is a
                    testimonial to that.
                  </p>
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

export default Testimonials;
