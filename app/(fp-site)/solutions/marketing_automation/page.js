import Navbar from "@/app/components/_App/Navbar";
import PageBanner from "@/app/components/Common/PageBanner";
import Footer from "@/app/components/_App/Footer";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const MarketingAutomation = () => {
  return (
    <>
      <Head>
        <title>Marketing Automation</title>
        <meta
          name="description"
          content="We offer personalised experience for your customers through efficient digital marketing automated at nominal costs."
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
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
      />

      <div className="home-company-area bg-color">
        <center>
          <h1>Expand Your Digital Footprynt</h1>
          <p>
            Want to up your social media engagement rate or grow organically on
            the web? We chalk out the best plan for you.
          </p>
        </center>
        <br />
        <br />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="company-content">
                <div className="company-tittle">
                  <h2>Marketing Automation</h2>
                  <p style={{ fontWeight: "bold" }}>
                    We offer personalised experience for your customers through
                    efficient digital marketing automated at nominal costs.
                  </p>
                  <p>
                    We&#8217;ve used some of the best third party marketing automation
                    tools and effectively made marketing easier for our clients
                    in the past 3 years.{" "}
                  </p>
                  <p>
                    Simple triggers such as a survey post, a purchase or usage
                    of a service has helped our clients retain their customers.{" "}
                  </p>
                  <p>
                    {" "}
                    Our marketing automation helps you achieve 360 degree
                    digital marketing solutions.{" "}
                  </p>
                </div>

                <Link href="/contact-us" legacyBehavior>
                  <a className="box-btn">Contact Us</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div className="company-img">
                <Image
                  quality={90}
                  loading="lazy"
                  src="/images/solutions-details/fpHow.png"
                  width={500}
                  height={450}
                  alt="company"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MarketingAutomation;
