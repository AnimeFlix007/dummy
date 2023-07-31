import React from "react";
import Navbar from "@/app/components/_App/Navbar";
import PageBanner from "@/app/components/Common/PageBanner";
import Footer from "@/app/components/_App/Footer";
import Link from "next/link";

import Head from "next/head";
import Image from "next/image";
const SocialMarketing = () => {
  return (
    <>
      <Head>
        <title>Social Media Marketing</title>
        <meta
          name="description"
          content="Still lacking the punch on Social Media? Time to switch to footprynt. Get the best out of your social media spends and grow rapidly."
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
                  <h2>Social Media Marketing</h2>
                  <p style={{ fontWeight: "bold" }}>
                    Still lacking the punch on Social Media? Time to switch to
                    footprynt. Get the best out of your social media spends and
                    grow rapidly.
                  </p>
                  <p>
                    We launched social media marketing in 2018 to improve brand
                    interaction with social media users.{" "}
                  </p>
                  <p>
                    Every brand needs to amplify its policy, philosophy and
                    objective communication effectively across the vast network
                    of social media platforms.{" "}
                  </p>
                  <p>
                    {" "}
                    And we help you do that by making things easier and
                    optimising your social media spends as well as making
                    content that is fun and relatable to your brand followers.{" "}
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
                  src="/images/solutions-details/platformWhat.png"
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

export default SocialMarketing;
