"use client"

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { PrideBaseURL } from "@/utils/baseUrl";
import Image from "next/image";

const Cmanagement = () => {
  return (
    <>
      <div className="banner-area" style={{ height: "500px" }}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid" style={{ marginTop: "40px" }}>
              <div className="section-title">
                <h2 style={{ color: "white" }}>
                  All-in-one data-driven solution for your Influencer Campaign
                  Management
                </h2>
                <p style={{ color: "white" }}>
                  Streamline the process of influencer campaign planning,
                  optimization and execution at one place. Footprynt provides
                  significant tools to run high-impact campaigns right from
                  creating influencer lists to providing final reports and
                  analytics.
                </p>
                <div className="banner-btn">
                  <Link legacyBehavior href="/demo_request">
                    <a
                      className="box-btn"
                      style={{
                        marginLeft: "30px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                      }}
                    >
                      REQUEST DEMO
                    </a>
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
            <div className="col-lg-3 col-sm-3">
              <div className="single-service">
                <div
                  className="service-content"
                  style={{ marginTop: "2rem", marginBottom: "2rem" }}
                >
                  <h3>
                    Creative Campaign <br />
                    Strategy
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3">
              <div className="single-service">
                <div
                  className="service-content"
                  style={{ marginTop: "2rem", marginBottom: "2rem" }}
                >
                  <h3>
                    Automated Influencer
                    <br /> Search
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3">
              <div className="single-service">
                <div
                  className="service-content"
                  style={{ marginTop: "2rem", marginBottom: "2rem" }}
                >
                  <h3>
                    Innovative Content
                    <br /> Production
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3">
              <div className="single-service">
                <div
                  className="service-content"
                  style={{ marginTop: "2rem", marginBottom: "2rem" }}
                >
                  <h3>
                    Extensive Campaign
                    <br /> Reporting
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="home-service-area pt-100 pb-70"
        style={{ backgroundColor: "#E8EEF1" }}
      >
        <div className="container">
          <div className="section-title">
            <h1 style={{ fontWeight: "bold" }}>
              End-to-end influencer campaign management solution
            </h1>

            <p>
              Save hundreds of man-hours spent in sifting through influencer
              profiles trying to find the ideal ones. Our Influencer database
              offer unprecedented access to 1M+ profiles using which you can
              track each influencer’s progress from application to final
              posting. With our in-house end-to-end service, we create
              successful campaigns with guaranteed ROI.
            </p>
            <br />
            <Link legacyBehavior href="/demo_request">
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
            <Image quality={90}  
              loading="lazy"
              src="/images/ss/d.jpg"
              width={600}
              height={300}
              alt="campaign management"
            />
          </div>
        </div>
      </div>

      <div className="home-service-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h1 style={{ fontWeight: "bold" }}>
              Personalised Campaign Strategy based on your goals
            </h1>

            <p>
              You set the objectives, and we deliver a tailored plan that
              matches your brand values and tone of voice. Our team of experts
              frame the roadmap to desired goals, and analyse relevant
              competitors to help you stay ahead of the game.{" "}
            </p>
            <br />
            <Link legacyBehavior href="/demo_request">
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
            <Image quality={90}  
              alt="Campaign Strategy"
              width={600}
              height={300}
              loading="lazy"
              src="/images/ss/d1.jpg"
            />
          </div>
        </div>
      </div>

      <div
        className="home-service-area pt-100 pb-70"
        style={{ backgroundColor: "#E8EEF1" }}
      >
        <div className="container">
          <div className="section-title">
            <h1 style={{ fontWeight: "bold" }}>
              Content Production in the right context
            </h1>

            <p>
              We handle the entire process of content production from briefing,
              monitoring, and handling it, thereby ensuring the highest quality
              and authenticity of the final product. We work alongside the
              influencers, customizing content pieces for each one of them,
              making sure it aligns not only with the platform’s look and feel
              but also your brand’s tone of voice.{" "}
            </p>
            <br />
            <Link legacyBehavior href="/demo_request">
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
            <Image quality={90}  
              alt="Content Production"
              width={600}
              height={300}
              loading="lazy"
              src="/images/ss/d3.jpg"
            />
          </div>
        </div>
      </div>

      <div className="services-details-area pt-100 pb-70">
        <div className="container">
          <center>
            <h1>Key benefits of our Campaign Management Solution</h1>
          </center>
          <div className="scrives-item-2 mt-4 ">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3>Create personalised Media Plan for Influencer Campaign</h3>
                <p>
                  Our easy to use media plan builder lets you customise campaign
                  settings by using filters and keywords including target
                  audience, impressions and other visible metrics. Track ideal
                  influencers using our Influencer Discovery tool from the
                  database of 1M+ profiles, and tailor your communication with
                  the selected ones accordingly.
                </p>
                <hr />

                <a
                  href={PrideBaseURL + "campaign"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      marginTop: "40px",
                      color: "#1d42d9",
                      cursor: "pointer",
                    }}
                  >
                    Create Campaign ➡️
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
                    src="/images/pride-site/pg-17.png"
                    alt="create campaign"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="scrives-item-2 mt-4 " style={{ marginTop: "300px" }}>
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
                    src="/images/pride-site/pg-18.png"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h3>Boost your Influencer Outreach</h3>
                <p>
                  Cut down on manual effort required to find the right
                  influencers by using our Influencer Discovery platform that
                  quickly find you data and analytics of 1M+ profiles.
                </p>
                <hr />

                <a
                  href={PrideBaseURL + "campaign"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      marginTop: "40px",
                      color: "#1d42d9",
                      cursor: "pointer",
                    }}
                  >
                    View Campaigns ➡️
                  </h5>
                </a>
              </div>
            </div>
          </div>

          <div className="scrives-item-2 mt-4 ">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3>Get automated estimates for key Campaign KPI</h3>
                <p>
                  All critical KPIs will be estimated automatically once you
                  create your media plan. Our reports will offer clear insights
                  into campaign reach, target audience percentage, engagement
                  projections, CPE/CPM, EMV and ROI of your campaigns.
                </p>
                <hr />

                <a
                  href={PrideBaseURL + "campaign"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      marginTop: "40px",
                      color: "#1d42d9",
                      cursor: "pointer",
                    }}
                  >
                    Campaign KPI ➡️
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
                    src="/images/pride-site/pg-7.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="scrives-item-2 mt-4 " style={{ marginTop: "300px" }}>
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
                    src="/images/pride-site/pg-8.png"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h3>Stay updated on your Campaign Progress</h3>
                <p>
                  Our easy-to-use search tools help you track your marketing
                  activities and tasks to review and approve your plans
                  automatically. Footprynt’s Influencer Discovery platform lets
                  you track influencer’s status and pending tasks so that you
                  can effectively measure your campaign progress. You can easily
                  stay updated on total expenditures, target audience reached,
                  CPE/CPM, EMV and ROI.
                </p>
                <hr />

                <a
                  href={PrideBaseURL + "campaign"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      marginTop: "40px",
                      color: "#1d42d9",
                      cursor: "pointer",
                    }}
                  >
                    Campaign Progress ➡️
                  </h5>
                </a>
              </div>
            </div>
          </div>

          <div className="scrives-item-2 mt-4 " style={{ marginTop: "300px" }}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3>Detect potential fraudulent activity</h3>
                <p>
                  {" "}
                  We use machine-learning algorithm to filter low-quality
                  influencers with poor or fake engagement rate and follower
                  count. Our advanced analytics dashboard saves sheer volume of
                  manual effort required to find quality influencers with
                  authentic engagement rate.
                </p>
                <hr />

                <a
                  href={PrideBaseURL + "campaign"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      marginTop: "40px",
                      color: "#1d42d9",
                      cursor: "pointer",
                    }}
                  >
                    Shortlist Influencers ➡️
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
                    src="/images/ss/c5.jpg"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="scrives-item-2 mt-4 ">
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
                    src="/images/ss/c7.jpg"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h3>Share reports with your clients in a few clicks</h3>
                <p>
                  Spare yourself the nightmare of spreadsheets, emails,
                  contracts, and pulling data from influencers’ Social Media.
                  Our Influencer Discovery platform lets you automate your
                  reporting routine by organising the collected data in
                  easy-to-understand, presentation ready reports, and easily
                  sharing them with your clients or colleagues.{" "}
                </p>
                <hr />
                <a
                  href={PrideBaseURL + "campaign"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      marginTop: "40px",
                      color: "#1d42d9",
                      cursor: "pointer",
                    }}
                  >
                    View Report ➡️
                  </h5>
                </a>
              </div>
            </div>
          </div>

          <div className="scrives-item-2 mt-4 " style={{ marginTop: "300px" }}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3>Manage old and new relationships</h3>
                <p>
                  Our Influencer Management solution lets you centralize all of
                  the influencers that you have worked previously or are working
                  currently in one place. You can filter influencers from time
                  to time and keep track of their latest activities.
                </p>
                <hr />

                <a
                  href={PrideBaseURL + "campaign"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      marginTop: "40px",
                      color: "#1d42d9",
                      cursor: "pointer",
                    }}
                  >
                    Compare Report ➡️
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
                    src="/images/ss/c6.jpg"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="choose-area pt-100 pb-70">
        <div className="container">
          <h2>Questions & Answers About Campaign Management</h2>
          <br />
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="choose-content">
                <div className="faq-accordion">
                  <Accordion allowZeroExpanded preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How can I plan my Influencer Campaign using your
                          Campaign management solution?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Our influencer management solution helps you create
                          media plan easily. All you need to do is adjust the
                          settings to create your marketing brief by providing
                          target audience, message outline, key dates and
                          estimated campaign budget. Once you start adding the
                          influencers using our Influencer Discovery platform,
                          you will get automatically calculated campaign reach,
                          CPE/CPM, EMV and ROI.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What is meant by Influencer Management?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Influencer management is a complex and challenging
                          process which includes multiple tasks like searching
                          for influencers, reaching out to them, planning,
                          optimization and execution of the campaign. All these
                          tasks can be exhaustive without the right tools. Our
                          Influencer Management solution provides you with all
                          critical features to discover influencers, analyze
                          their profiles, run your campaigns, and track the
                          overall performance.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What are Campaign management tools?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Different marketing platforms offer a variety of
                          tools, each having their own strengths. To choose the
                          right software for your brand campaign, you first need
                          to understand your goals and objectives. Our
                          Influencer Management solution is an excellent option
                          if you are looking to save hundreds of man-hours
                          discovering the right influencers, manage execution,
                          and track the final results. Our tech tools manage all
                          these tasks at one place automatically, creating your
                          entire media plan, and even checking potentially
                          fraudulent activities, so as to drive maximum revenue.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How can I measure the success of my Influencer
                          Marketing Campaign?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Our Campaign Analytics tool monitors the performance
                          of your campaigns in a few clicks. You can keep track
                          of total expenditures, CPECPM, EMV, and ROI to
                          understand the efficiency of your actions and empower
                          your decision-making with meaningful insights.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="e">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Why do I need Influencer Marketing Strategy?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          An effective influencer marketing campaign strategy
                          helps businesses increase brand awareness, reach out
                          to new customers, connect with the existing audience,
                          and gain trust. However, without the right influencer
                          marketing tools at your disposal, these tasks can be
                          complex. That’s why we have developed a instantaneous
                          and cutting-edge, data-driven Campaign Management
                          solution to help you manage and track your influencer
                          campaigns with ease.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="f">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How to create a successful Marketing Campaign?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          For a campaign to be successful, you need a creative
                          media plan identifying campaign goals and budget.
                          After that, you must find the right influencers with
                          potential target audience, and then measure campaign’s
                          ROI. Handling all this can be a nightmare! Footprynt’s
                          Influencer Management provides you with an end-to-end
                          solution to achieve your campaign objectives and
                          goals. With our Influencer Discovery platform, you can
                          easily find the ideal influencers from our massive
                          database of 1M+ influencer profiles. The Campaign
                          Analytics tool, automatically provides data and stats
                          of estimated engagement projections of all
                          influencers. You can further track your Campaign
                          progress and results in just a few clicks. We even
                          save you from investing into potentially fraudulent
                          activities.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                      <Link legacyBehavior href="/about-us">
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
                      <Link legacyBehavior href="/about-us">
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

export default Cmanagement;
