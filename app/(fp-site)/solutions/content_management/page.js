import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/app/components/_App/Navbar";
import PageBanner from "@/app/components/Common/PageBanner";
import Footer from "@/app/components/_App/Footer";

const ContentManagement = () => {
  return (
    <>
      <Head>
        <title>SEO, CRO & Content Management</title>
        <meta
          name="description"
          content="Get your adwords in place. We create the right content for your brand. And your ads strategy? It’s whetted by our professionals."
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
                  <h2>SEO, CRO & Content Management</h2>
                  <p style={{ fontWeight: "bold" }}>
                    Get your adwords in place. We create the right content for
                    your brand. And your ads strategy? It’s whetted by our
                    professionals.
                  </p>
                  <p>
                    While our SEO services are aimed at increasing online
                    traffic to your business, our CRO services ensure that the
                    traffic converts into leads.{" "}
                  </p>
                  <p>
                    We create quality lead generation campaigns with simple
                    landing pages and convert the traffic to actual leads.{" "}
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
                  src="/images/solutions-details/solutions-details3.png"
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

export default ContentManagement;
