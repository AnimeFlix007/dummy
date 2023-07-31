"use client"

import React, { useState } from "react";
import Link from "next/link";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import RemoveModeratorRoundedIcon from "@mui/icons-material/RemoveModeratorRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import Image from "next/image";
import { PrideBaseURL } from "@/utils/baseUrl";

const Ianalytics = () => {
  const [hover, setHover] = useState({
    idx: -1,
    color: "white",
  });
  const content = [
    {
      title: "1M+ influencer data and <br /> analytics",
      icon: function Icon(color) {
        return (
          <PsychologyRoundedIcon
            style={{ height: "50px", width: "50px", color, float: "left" }}
          />
        );
      },
    },
    {
      title: "Best fake followers detection <br /> system",
      icon: function Icon(color) {
        return (
          <RemoveModeratorRoundedIcon
            style={{ height: "50px", width: "50px", color, float: "left" }}
          />
        );
      },
    },
    {
      title: "Best fake followers detection <br /> system",
      icon: function Icon(color) {
        return (
          <GroupsRoundedIcon
            style={{ height: "50px", width: "50px", color, float: "left" }}
          />
        );
      },
    },
  ];
  return (
    <>
      <div className="banner-area" style={{ height: "500px" }}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="section-title" style={{ marginTop: "9rem" }}>
                <h2 style={{ color: "white" }}>
                  Cutting-edge analytics of 1M+ influencers for your successful
                  Brand Campaign
                </h2>
                <p style={{ color: "white" }}>
                  Run performance-based campaigns by getting influencer
                  engagement metrics on your fingertips. Our advanced analytics
                  tools help you to vet influencers before partnering with them.
                </p>
                <br />

                <div className="banner-btn">
                  <Link href="/demo_request" legacyBehavior>
                    <a className="box-btn">REQUEST DEMO</a>
                  </Link>
                  <a
                    href={PrideBaseURL + "register"}
                    target="_blank"
                    style={{ marginLeft: "1rem" }}
                    className="box-btn"
                    rel="noreferrer"
                  >
                    REGISTER
                  </a>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="home-shape">
          <div className="shape1">
            <Image quality={90}  
              width={30}
              height={30}
              loading="lazy"
              src="/images/shape/shape1.png"
              alt="shape"
            />
          </div>
          <div className="shape2">
            <Image quality={90}  
              width={30}
              height={30}
              loading="lazy"
              src="/images/shape/shape2.png"
              alt="shape"
            />
          </div>
          <div className="shape3">
            <Image quality={90}  
              width={30}
              height={30}
              loading="lazy"
              src="/images/shape/shape3.png"
              alt="shape"
            />
          </div>
          <div className="shape4">
            <Image quality={90}  
              width={30}
              height={30}
              loading="lazy"
              src="/images/shape/shape4.png"
              alt="shape"
            />
          </div>
          <div className="shape5">
            <Image quality={90}  
              width={30}
              height={30}
              loading="lazy"
              src="/images/shape/shape5.png"
              alt="shape"
            />
          </div>
          <div className="shape6">
            <Image quality={90}  
              width={30}
              height={30}
              loading="lazy"
              src="/images/shape/shape6.png"
              alt="shape"
            />
          </div>
        </div>
      </div>

      <div className="home-service-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            {content.map((ele, idx) => {
              const color = idx === hover.idx ? hover.color : "blue";
              return (
                <div
                  key={idx}
                  className="col-lg-4 col-sm-6"
                  onMouseOver={() =>
                    setHover((prev) => {
                      return { ...prev, idx: idx };
                    })
                  }
                  onMouseOut={() =>
                    setHover((prev) => {
                      return { ...prev, idx: -1 };
                    })
                  }
                >
                  <div
                    className="single-service"
                    style={{
                      height: "210px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                    }}
                  >
                    <div className="service-img">{ele.icon(color)}</div>
                    <br />
                    <br />
                    <div className="service-content">
                      <h3 dangerouslySetInnerHTML={{ __html: ele.title }} />
                      <Link href="/contact-us" legacyBehavior>
                        <a
                          className="line-bnt"
                          style={{ float: "right", marginTop: "30px" }}
                        >
                          Try it Now ➡️
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="home-service-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h1>Instagram, Twitter and YouTube Influencer Profile analytics</h1>

            <Image quality={90}  
              width={600}
              height={300}
              loading="lazy"
              src="/images/ss/ss5.jpg"
              alt="Instagram, Twitter and YouTube Influencer Profile analytics"
            />
            <br />
            <br />

            <h5>
              Identify authentic influencer profiles through estimated
              projections like engagement rate, follower growth, comment
              authenticity, fraud detection, and many more. Dig deep into
              complex analytics of any influencer to find the most suitable ones
              for your brand in no time.
            </h5>
            <Link href="/demo_request" legacyBehavior>
              <a className="box-btn">Request Demo</a>
            </Link>
            <a
              href={PrideBaseURL + "register"}
              target="_blank"
              style={{ marginLeft: "1rem" }}
              className="box-btn"
              rel="noreferrer"
            >
              REGISTER
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="services-details-area pt-100 pb-70">
        <div className="container">
          <center>
            <h1>Key features of our influencer analytics</h1>
          </center>
          <br />
          <div className="scrives-item-2 mt-4 ">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3>Basic influencer details</h3>
                <p>
                  Our Influencer Analytics report offers you basic influencer
                  details like engagement rate, impressions and reach. This not
                  only saves your time and energy but also helps in listing
                  influencers based on your campaign reach goals.
                </p>
                <hr />

                <a
                  href={PrideBaseURL + "influencers/113"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    View Report ➡️
                  </h5>
                </a>
              </div>
              <div className="col-lg-6">
                <div className="services-img mb-qc">
                  <Image quality={90}  
                    width={600}
                    height={300}
                    loading="lazy"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                    }}
                    src="/images/pride-site/pg-10.png"
                    alt="pg-10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="scrives-item-2 mt-4">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="services-img mb-qc">
                  <Image quality={90}  
                    width={600}
                    height={300}
                    loading="lazy"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                    }}
                    src="/images/pride-site/pg-13.png"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h3>Accurate Audience Demographics</h3>
                <p>
                  For your campaign to be successful, you need to find
                  influencers who influence your target audience. Our Influencer
                  Analytics report provides you with the precise information
                  about the audience type of each influencer, to help you better
                  target your sponsored posts.
                </p>
                <hr />

                <a
                  href={PrideBaseURL + "influencers"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    Audience Analytics➡️
                  </h5>
                </a>
              </div>
            </div>
          </div>

          <div className="scrives-item-2 mt-4 ">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3>Best-in-Class Fraud Detection Solution</h3>
                <p>
                  Our Influencer analytics report helps you detect low-quality
                  influencers with poor or fake engagement rate and follower
                  count. Run performance-based influencer campaigns by
                  identifying who drives the most engagement and sales through
                  our analytics dashboard.
                </p>
                <hr />

                <a
                  href={PrideBaseURL + "influencers/113"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    Search Influencers ➡️
                  </h5>
                </a>
              </div>
              <div className="col-lg-6">
                <div className="services-img mb-qc">
                  <Image quality={90}  
                    width={600}
                    height={300}
                    loading="lazy"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                    }}
                    src="/images/pride-site/pg-16.png"
                    alt="pg-15"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="scrives-item-2 mt-4 " style={{ marginTop: "200px" }}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="services-img mb-qc">
                  <Image quality={90}  
                    width={600}
                    height={300}
                    loading="lazy"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                    }}
                    src="/images/pride-site/pg-11.png"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h3>Detailed estimated engagement projections</h3>
                <p>
                  Too many businesses have wasted time on chasing after fraud
                  influencers. Just because an influencer profile seems to
                  appear lucrative, does not mean it will help in driving
                  benefit to your business. Our complex analytics report
                  instantaneously offers you an influencer&#8217;s authentic
                  engagement rate in relation to the industry benchmark, thereby
                  driving your campaign budget effectively.
                </p>
                <hr />

                <a
                  href={PrideBaseURL + "compare"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    Compare Analysis ➡️
                  </h5>
                </a>
              </div>
            </div>
          </div>

          <div className="scrives-item-2 mt-4 ">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3>Content Analysis</h3>
                <p>
                  How about being able to find out what all brands an influencer
                  has mentioned in the past in their content with just a click?
                  Our Influencer Analytics report offers you such details for
                  you to understand influencer’s target audiences in order to
                  craft your marketing strategy accordingly.
                </p>
                <hr />
                <a
                  href={PrideBaseURL + "influencers/113"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    View Paid Promotions ➡️
                  </h5>
                </a>
              </div>
              <div className="col-lg-6">
                <div className="services-img mb-qc">
                  <Image quality={90}  
                    width={600}
                    height={300}
                    loading="lazy"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                    }}
                    src="/images/pride-site/pg-12.png"
                    alt="pg-12"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="scrives-item-2 mt-4 " style={{ marginTop: "200px" }}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="services-img mb-qc">
                  <Image quality={90}  
                    width={600}
                    height={300}
                    loading="lazy"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                    }}
                    src="/images/pride-site/pg-14.png"
                    alt="Image"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <h3>Estimated Price for Sponsored Content</h3>
                <p>
                  A lot of times, brands go through great ordeals finding out
                  the cost of influencers for their budgeted campaigns. With our
                  Influencer Analytics report, you can save a lot of your time
                  and energy by selecting only those influencers whose costs
                  align with your campaign budget. You can also check
                  influencers’ earned media value to measure potential benefit
                  for each penny spent.
                </p>
                <hr />
                <a
                  href={PrideBaseURL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    View Content ➡️
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <center>
          <h1>
            Create an account to access 1M+ influencer profile data and
            analytics
          </h1>
          <a
            target="_blank"
            rel="noreferrer"
            href={PrideBaseURL + "register"}
            className="box-btn"
          >
            Register for FREE
          </a>
        </center>
      </div>

      <div
        className="home-company-area"
        style={{
          backgroundColor: "#E8EEF1",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              style={{ backgroundColor: "#1d42d9" }}
            >
              <div className="company-content">
                <div className="container">
                  <div className="content" style={{ marginTop: "80px" }}>
                    <center>
                      <h1 style={{ color: "white" }}>
                        See FootPrynt in Action
                      </h1>
                      <p style={{ color: "white" }}>
                        Get familiar with the FootPrynt Influencer Marketing
                        Platform by exploring it with our sales manager.
                      </p>
                      <Link href="/about-us" legacyBehavior>
                        <a className="box-btn border-btn">Get Started Free</a>
                      </Link>
                    </center>
                    <br />
                  </div>
                  <div className="flap"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="company-content">
                <div className="container">
                  <div className="content" style={{ marginTop: "80px" }}>
                    <center>
                      <h2 style={{ color: "#132460" }}>
                        Try FootPrynt for your brand or agency
                      </h2>
                      <p>
                        Start with free media plans, campaign management and
                        demo versions of other features.
                      </p>
                      <Link href="/about-us" legacyBehavior>
                        <a className="box-btn">Get Started Free</a>
                      </Link>
                    </center>
                    <br />
                  </div>
                  <div className="flap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ianalytics;
