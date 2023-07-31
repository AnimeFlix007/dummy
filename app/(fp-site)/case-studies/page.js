import PageBanner from "@/app/components/Common/PageBanner";
import Footer from "@/app/components/_App/Footer";
import Navbar from "@/app/components/_App/Navbar";
import Image from "next/image";

export const metadata = {
  title: "Footprynt - Case Studies",
  description:
    "Pharmeasy Youtube Channel, Promoting Download of App through financial influencers, Asian Paints Promoting new age DIY products, Promoting food products by Emami - Healthy and Tasty, Asian Paints - YouTube ROI Campaign, This Or That Launch Campaign,Selected top celebrity and chef who are vocal about diabetes Long format content created by influencers which will be used by PharmEasy to promote awareness on their platform Influencers further added reach to content and facebook community signups through instagram stories,Instagram influencers from DIY and Home Decor categories were selected to showcase top 3 products from the range Long format DIY and decor content created to showcase product highlights and uses 2 CAT A + 2 CAT B Influencers engaged Instagram influencers from various categories - Lifestyle, Fashion, Food and Stand up Comedy Create innovative content (reels, stories, posts, IGTV) to drive brand awareness and drive sales through attractive offers Total of 10 CAT A influencers engaged within a 2.5 month period for the launch,We collaborated with 5 well-known and popular Bengali creators across different arenas to create short webisodes in the Kitchen, where they share their stories while cooking with Emami Mantra Shorshe Posto masala and Kachchi Ghani Mustard Oil. Long format cooking content created to showcase the product and its key-benefits in the middle of their content consumption routine, Monthly planned campaign with a roster of macro and micro influencers across YouTube and Instagram Influencers from finance, stock markets, startups categories plus generic popular influencers On a monthly basis 2 CAT A influencers + 5 CAT B + 5 CAT C influencer content published",
};

const CaseStudies = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Case Studies"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Case Studies"
      />
      <div className="container" style={{ marginTop: "2rem" }}>
        <div className="section-title">
          <span>Case Studies</span>
          <h2>Have a look at our Work Showcase</h2>
        </div>
        <div className="row case-list">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="casecard">
                <div className="single-case">
                  <div className="case-img">
                    <a href="/case-studies-details/2">
                      <Image
                        quality={90}
                        loading="lazy"
                        src="/images/case-studies/pharmeasy1.jpg"
                        alt="casestudy"
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
                      Doctors and wellness experts created videos for the
                      brand’s YouTube channel. Campaign to drive awareness for
                      Type 1 Diabetes through influencer marketing.
                    </p>
                    <a
                      className="line-bnt"
                      href="/case-studies-details/2"
                    >
                      View Details
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
                        alt="casestudy"
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
                    <a
                      className="line-bnt"
                      href="/case-studies-details/1"
                    >
                      View Details
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
                        alt="casestudy"
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
                      Launch of DIY products by Asian Paints by collaborating
                      with DIY and home decor experts. Platform used - Youtube.
                    </p>
                    <a
                      className="line-bnt"
                      href="/case-studies-details/0"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="casecard">
                <div className="single-case">
                  <div className="case-img">
                    <a href="/case-studies-details/4">
                      <Image
                        quality={90}
                        loading="lazy"
                        src="/images/cases/emamih.jpg"
                        alt="casestudy"
                        className="caseimage"
                        width={500}
                        height={300}
                      />
                    </a>
                  </div>
                  <div className="content">
                    <a href="/case-studies-details/4">
                      <h3>
                        Promoting food products by Emami - Healthy and Tasty
                      </h3>
                    </a>
                    <p>
                      {" "}
                      Long format cooking content created to showcase the
                      products and their key-benefits in the middle of their
                      content consumption routine. Platform used - YouTube
                    </p>
                    <a
                      className="line-bnt"
                      href="/case-studies-details/4"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="casecard">
                <div className="single-case">
                  <div className="case-img">
                    <a href="/case-studies-details/5">
                      <Image
                        quality={90}
                        loading="lazy"
                        src="/images/cases/yt.jpg"
                        alt="casestudy"
                        className="caseimage"
                        width={500}
                        height={300}
                      />
                    </a>
                  </div>
                  <div className="content">
                    <a href="/case-studies-details/5">
                      <h3>Asian Paints - YouTube ROI Campaign</h3>
                    </a>
                    <p>
                      ROI Influencer marketing campaign that fuelled sales
                      growth for Asian Paints’ specific product line of ezyCR8
                      products
                    </p>
                    <a
                      className="line-bnt"
                      href="/case-studies-details/5"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="casecard">
                <div className="single-case">
                  <div className="case-img">
                    <a href="/case-studies-details/3">
                      <Image
                        quality={90}
                        loading="lazy"
                        src="/images/case-studies/thisorthat1.jpg"
                        alt="casestudy"
                        className="caseimage"
                        width={500}
                        height={300}
                      />
                    </a>
                  </div>
                  <div className="content">
                    <a href="/case-studies-details/3">
                      <h3>This Or That Launch Campaign</h3>
                    </a>
                    <p>
                      Launch campaign with influencers to launch India&apos;s
                      first shopping platform to curate innovative and views
                      (all formats) unique startup brands
                    </p>
                    <a
                      className="line-bnt"
                      href="/case-studies-details/3"
                    >
                      View Details
                    </a>
                  </div>
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

export default CaseStudies;
