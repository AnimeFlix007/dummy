"use client";

import { Box, Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LanguageIcon from "@mui/icons-material/Language";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import Badge from "@mui/material/Badge";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrideBaseURL } from "@/utils/baseUrl";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import GroupsIcon from "@mui/icons-material/Groups";

const InfluencerDetails = ({ influencer }) => {
  const er = +influencer?.engagement_score || 0;
  const blur = {
    color: "transparent",
    textShadow: "0 0 8px #000",
  };
  const NavigateAccountType = () => {
    const newPageUrl = PrideBaseURL;
    const newTab = window.open(newPageUrl, "_blank");
    newTab.focus();
  };
  const socialMedia =
    influencer?.influencer_social_media.charAt(0).toUpperCase() +
    influencer?.influencer_social_media.substring(1);
  return (
    <Box>
      <div className="home-company-area bg-color">
        <div className="container">
          <div className="grid-item item1">
            <div>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  influencer.influencer_social_media === "twitter" ? (
                    <Image
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="logo"
                      src="/images/icons/TwitterIcon.png"
                      style={{ borderRadius: "50%" }}
                    />
                  ) : influencer.influencer_social_media === "youtube" ? (
                    <Image
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="logo"
                      src="/images/icons/youtube-icon.jpg"
                      style={{ borderRadius: "50%" }}
                    />
                  ) : influencer.influencer_social_media === "instagram" ? (
                    <Image
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="logo"
                      src="/images/icons/instagram.png"
                      style={{
                        borderRadius: "50%",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  ) : null
                }
              >
                <Image
                  height={100}
                  width={100}
                  loading="lazy"
                  alt={influencer?.influencer_handle_name}
                  src={influencer?.influencer_profile_link}
                  style={{
                    boxShadow:
                      "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                    borderRadius: "50%",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </Badge>
            </div>

            <div className="info">
              <ul>
                <li style={{ color: "#2192FF" }}>
                  {influencer?.influencer_handle_name}
                  <CheckCircleIcon />
                </li>
                <li>
                  <LocationOnOutlinedIcon />
                  <span>{influencer?.influencer_country}</span>
                </li>
                <li>
                  <LanguageIcon />
                  <span style={blur}>English</span>
                </li>
              </ul>
              <h1 style={{ textAlign: "left" }}>
                {socialMedia} Stats & Analytics for{" "}
                {influencer?.influencer_name}
              </h1>
              <div className="info1">
                <ul>
                  <li>Followers</li>
                  <li>
                    Engagement Rate
                    <HelpOutlineRoundedIcon />
                  </li>
                </ul>
                <ul>
                  <li>
                    <h1>{influencer?.follower_count}</h1>
                  </li>
                  <li>
                    <h1>{er?.toFixed(2)}%</h1>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="analyse pb-100" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="btn-group">
            <Button
              startIcon={<MailOutlineRoundedIcon />}
              className="btn1"
              style={{ textTransform: "none" }}
              onClick={() => NavigateAccountType()}
            >
              Send Email
            </Button>
            <Button
              startIcon={<PictureAsPdfRoundedIcon />}
              className="btn2"
              onClick={() => NavigateAccountType()}
              style={{ color: "blue", textTransform: "none" }}
            >
              PDF
            </Button>
            <Button
              startIcon={<EventNoteRoundedIcon />}
              className="btn3"
              onClick={() => NavigateAccountType()}
              style={{ textTransform: "none" }}
            >
              Add to Media Plan
            </Button>
            <Button
              startIcon={<InsertChartRoundedIcon />}
              className="btn4"
              onClick={() => NavigateAccountType()}
              style={{ textTransform: "none" }}
            >
              Add to Campaign
            </Button>
            <p style={{ marginLeft: "300px" }}>
              This data may be out of date{" "}
              <span style={{ color: "blue" }}>
                Update
                <UpdateRoundedIcon />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="analyse pb-100" style={{ backgroundColor: "#E8EEF1" }}>
        <div className="container">
          <h2 style={{ paddingTop: "1.5rem" }}>
            {socialMedia} Analytics for {influencer?.influencer_name}
          </h2>
          <p>
            Here’re {socialMedia} account statistics for{" "}
            {influencer?.influencer_name}. The audience size of{" "}
            {influencer?.influencer_name} is 506.7M followers. The account
            gained 11.7M new followers in the four last weeks. The Engagement
            Rate is 2.67%. The average number of likes and comments per
            Instagram post created by {influencer?.influencer_name} is 13.5M and
            88.8K respectively. {influencer?.influencer_name} publishes content
            mostly about Sports with a ball.
          </p>
          <div>
            <h6 style={{ color: "blue" }} onClick={() => NavigateAccountType()}>
              Register for FREE to view full report
              <ArrowForwardIosRoundedIcon />
            </h6>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3>Check {socialMedia} audience demographics</h3>
              <div
                className="container"
                style={{ backgroundColor: "White", padding: "20px 50px" }}
              >
                <h3>Audience Demographics</h3>
                <hr />
                <div style={blur}>
                  <p>
                    Audience countries, cities and
                    states......................................................
                    <LockRoundedIcon />
                  </p>
                  <p>
                    Languages of
                    audience......................................................................
                    <LockRoundedIcon />
                  </p>
                  <p>
                    Full audience age-gender
                    split.............................................................
                    <LockRoundedIcon />
                  </p>
                  <p>
                    Influencers true
                    reach.....................................................................
                    <LockRoundedIcon />
                  </p>
                </div>
                <div className="btn-group" style={{ marginTop: "1rem" }}>
                  <Button
                    className="btn1"
                    style={{ textTransform: "none" }}
                    onClick={() => NavigateAccountType()}
                  >
                    View Demographic and reach
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h3>Check for fake followers and engagements</h3>
              <div
                className="container"
                style={{ backgroundColor: "White", padding: "20px 50px" }}
              >
                <h3>
                  {socialMedia} Follower Growth for{" "}
                  {influencer?.influencer_name}
                </h3>
                <hr />
                <div style={blur}>
                  <p>+11,731,524 followers last 4 weeks +2.37%</p>
                  <p>
                    Follow/unfollow patterns
                    analysis.......................................
                    <LockRoundedIcon />
                  </p>
                  <p>
                    Following
                    graph.............................................................
                    <LockRoundedIcon />
                  </p>
                  <p>
                    Organic growth
                    check.....................................................................
                    <LockRoundedIcon />
                  </p>
                </div>
                <div className="btn-group" style={{ marginTop: "1rem" }}>
                  <Button
                    className="btn1"
                    style={{ textTransform: "none" }}
                    onClick={() => NavigateAccountType()}
                  >
                    View growth analytics for {influencer?.influencer_name}
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-lg-6" style={{ marginTop: "30px" }}>
              <div
                className="container"
                style={{ backgroundColor: "White", padding: "20px 50px" }}
              >
                <h3>Audience Interests</h3>
                <hr />
                <div style={blur}>
                  <p>Finance & Economics</p>
                  <p>Cinema & Actors/actresses</p>
                  <p>Trainers & Coaches</p>
                  <p>
                    Full audience interests
                    list...................................................................
                    <LockRoundedIcon />
                  </p>
                </div>
                <div className="btn-group" style={{ marginTop: "1rem" }}>
                  <Button
                    className="btn1"
                    style={{ textTransform: "none" }}
                    onClick={() => NavigateAccountType()}
                  >
                    View what audience is interested in
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-lg-6" style={{ marginTop: "30px" }}>
              <div
                className="container"
                style={{ backgroundColor: "White", padding: "20px 50px" }}
              >
                <h3>{socialMedia} Account Activity</h3>
                <hr />
                <div style={blur}>
                  <ul style={{ display: "flex" }}>
                    <li style={{ marginRight: "35px" }}>Avg Likes</li>
                    <li style={{ marginRight: "35px" }}>Avg Comments</li>
                  </ul>
                  <ul style={{ display: "flex" }}>
                    <li style={{ marginRight: "35px", ...blur }}>
                      {influencer?.influencer_likes}
                    </li>
                    <li style={{ marginRight: "55px", ...blur }}>
                      {influencer?.influencer_comments}
                    </li>
                  </ul>
                  <p>
                    Engagement
                    analysis.....................................................................
                    <LockRoundedIcon />
                  </p>
                  <p>
                    Engagement authenticity
                    check.............................................................
                    <LockRoundedIcon />
                  </p>
                  <p>
                    Comment pods
                    check....................................................................
                    <LockRoundedIcon />
                  </p>
                </div>
                <div className="btn-group" style={{ marginTop: "1rem" }}>
                  <Button
                    className="btn1"
                    style={{ textTransform: "none" }}
                    onClick={() => NavigateAccountType()}
                  >
                    View Demographic and reach
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-lg-6" style={{ marginTop: "30px" }}>
              <h3>Check advertising performance</h3>
              <div
                className="container"
                style={{ backgroundColor: "White", padding: "20px 50px" }}
              >
                <h3>Brand Mentions</h3>
                <hr />
                <div style={blur}>
                  <p>
                    Estimated post
                    price.....................................................
                    <LockRoundedIcon />
                  </p>
                  <p>
                    Advertising post
                    freq.....................................................................
                    <LockRoundedIcon />
                  </p>
                  <p>
                    Non-ad post
                    freq............................................................
                    <LockRoundedIcon />
                  </p>
                  <p>
                    Native ad
                    performance....................................................................
                    <LockRoundedIcon />
                  </p>
                </div>

                <div className="btn-group" style={{ marginTop: "1rem" }}>
                  <Button
                    className="btn1"
                    style={{ textTransform: "none" }}
                    onClick={() => NavigateAccountType()}
                  >
                    View native ads analysis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <center>
            <button
              className="box-btn"
              style={{ marginTop: "50px", fontWeight: "bold" }}
              onClick={() => NavigateAccountType()}
            >
              Get Full Report FREE
            </button>
            <br />
            <p>Free report for Instagram account owners</p>
            <h6 style={{ color: "blue" }}>including</h6>
          </center>
        </div>
        <div className="analyse " style={{ backgroundColor: "white" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 col-sm-6"
                style={{ marginTop: "40px", marginBottom: "40px" }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <EqualizerIcon sx={{ mr: 1 }} />
                  <h3>Instagram Audience Demographic</h3>
                </div>
                <p>
                  {" "}
                  Check {influencer?.influencer_name} audience demographics.
                  Full report shows percentage for top-5 countries, top-5
                  cities, states breakdown for US, core gender, and top-5
                  languages.
                </p>
              </div>

              <div
                className="col-lg-4 col-sm-6"
                style={{ marginTop: "40px", marginBottom: "40px" }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <DataUsageIcon  sx={{ mr: 1 }} />
                  <h3>
                    {influencer?.influencer_name} audience quality analytics
                  </h3>
                </div>
                <p>
                  {" "}
                  Get in-depth analysis of the quality of audience and find fake
                  or ghost followers numbers. The report will show the number of
                  real people and influencers, the percentage of mass followers
                  and suspicious accounts.
                </p>
              </div>

              <div
                className="col-lg-4 col-sm-6"
                style={{ marginTop: "40px", marginBottom: "40px" }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <GroupsIcon sx={{ mr: 1 }} />
                  <h3>Audience age and gender</h3>
                </div>
                <p>
                  {" "}
                  Evaluate the percentage of target age group and gender among{" "}
                  {influencer?.influencer_name} audience. The report will show
                  the percent of each age-gender group and overall split.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: "40px" }}>
          <h2>
            FAQ: {socialMedia} Stats for {influencer?.influencer_name} Account
          </h2>
          <p>
            Eager to learn more about the @cristiano Instagram followers? Or
            maybe you need to review the engagement rate and other vital metrics
            of Cristiano Ronaldo Instagram account since you want to collaborate
            with them? There could be a lot of reasons why you might be
            interested in learning the Cristiano Ronaldo analytics data. But no
            matter the cause, we prepared this small and insightful FAQ to
            answer the most popular questions about Cristiano Ronaldo Instagram
            statistics.
          </p>
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div
                className="choose-content"
                style={{ backgroundColor: "white" }}
              >
                <div className="faq-accordion">
                  <Accordion allowZeroExpanded preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton
                          style={{ backgroundColor: "white" }}
                        >
                          How to browse {influencer?.influencer_name}{" "}
                          {socialMedia} statistics?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          You can conduct a full-fledged and in-depth analysis
                          of {influencer?.influencer_name} account and review
                          its {socialMedia}
                          Analytics while analyzing the most crucial and
                          essential metrics (like authentic engagement, audience
                          quality score, and many other indicators) in the full
                          Footprynt {socialMedia} report.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What kind of {influencer?.influencer_name}{" "}
                          {socialMedia} stats are available?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          As we have briefly mentioned above, there are many
                          insightful data and metrics for you to review for any
                          given {socialMedia} account. Such core metrics as the
                          audience demographics and interests, follower growth,
                          engagement rate, comment authenticity, and sponsored
                          posts performance are available. The list doesn’t end
                          there, as there are a lot of other essential metrics.
                          But exactly with these statistics, you can easily
                          monitor Cristiano Ronaldo Instagram analytics via the
                          complete {socialMedia} Analytical Report.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton
                          style={{ backgroundColor: "white" }}
                        >
                          How many followers does {influencer?.influencer_name}{" "}
                          have on {socialMedia}?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          {influencer?.influencer_name} {socialMedia} follower
                          count is currently at 506.7M followers. And just like
                          any other Instagram account, the total number of
                          followers is constantly changing. So if you want to
                          understand how actively an {socialMedia} account, such
                          as {influencer?.influencer_name}, is growing, you are
                          able to do so in the Footprynt {socialMedia} report.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What is the engagement rate of{" "}
                          {influencer?.influencer_name} {socialMedia} Account?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          The engagement rate of {influencer?.influencer_name}{" "}
                          {socialMedia} account is 2.67%. Typically, the
                          engagement rate metric determines how actively the
                          audience engages with the influencer’s content. That
                          will show how much impact an influencer can
                          potentially make upon promoting or advertising a
                          specific product via their {socialMedia} account.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="e">
                      <AccordionItemHeading>
                        <AccordionItemButton
                          style={{ backgroundColor: "white" }}
                        >
                          How much does {influencer?.influencer_name} make per{" "}
                          {socialMedia} post?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Everything that somehow concerns such questions as how
                          much does {influencer?.influencer_name} make per{" "}
                          {socialMedia} post, story, or even what’s{" "}
                          {influencer?.influencer_name} net worth - can be
                          freely reviewed in our full report. Simply upgrade
                          your access to review more insightful data on millions
                          of other social influencer accounts. That way, you’ll
                          be able to compare and decided on the right
                          collaborator who will be suitable for your business.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="f">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What is the average likes count on{" "}
                          {influencer?.influencer_name} {socialMedia} Posts?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          The average amount of likes is around 13.5M per post.
                          However, to better understand how a particular account
                          performs or, in this case,{" "}
                          {influencer?.influencer_name} instagram works, it’s
                          vital to be focusing on the level of engagement, not
                          just Cristiano Ronaldo most liked Instagram post.
                          Since that metric will show just how much percentage
                          of the audience is actively involved with the content
                          creator content. That fact alone may completely change
                          your social influencer strategy.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="g">
                      <AccordionItemHeading>
                        <AccordionItemButton
                          style={{ backgroundColor: "white" }}
                        >
                          How many comments on average does{" "}
                          {influencer?.influencer_name} receive per{" "}
                          {socialMedia} Post?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          The moderate comments are 88.8K per post. There is no
                          doubt that the number of comments is one of the most
                          blatant indicators to understand how active the
                          audience of an Instagram account is, similar to the{" "}
                          {influencer?.influencer_name} Instagram. However,
                          besides the number of comments, it’s even more
                          critical to track the overall engagement level and the
                          authenticity of the comments. There are a lot of
                          accounts that may claim that they have a large number
                          of followers. But what you may not understand is that
                          some of these followers may turn to be bots.
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
    </Box>
  );
};

export default InfluencerDetails;
