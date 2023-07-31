import Navbar from "@/app/components/_App/Navbar";
import PageBanner from "@/app/components/Common/PageBanner";
import Footer from "@/app/components/_App/Footer";
import Link from "next/link";

import Head from "next/head";
import Image from "next/image";
const MediaBuying = () => {
  return (
    <>
      <Head>
        <title>Media buying and selling</title>
        <meta
          name="description"
          content="Our digital media buying strategies take into account design, copywriting, budget planning and targeting. We get you the perfect digital fit."
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
                  <h2>Media buying and selling</h2>
                  <p style={{ fontWeight: "bold" }}>
                    Our digital media buying strategies take into account
                    design, copywriting, budget planning and targeting. We get
                    you the perfect digital fit.
                  </p>
                  <p>
                    Our goal has always been to select the right purchase space
                    on the right channel using the right platforms.{" "}
                  </p>
                  <p>
                    Our highly experienced team dwells into every keyword used,
                    every geographical area to be targeted, every search keyword
                    to be shortlisted and even the basic spends at the beginning
                    of every campaign.{" "}
                  </p>
                  <p>
                    {" "}
                    We handle small monthly budgets to annual mandates depending
                    on the brand objectives.{" "}
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
                  src="/images/solutions-details/fpWhat.png"
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

export default MediaBuying;
