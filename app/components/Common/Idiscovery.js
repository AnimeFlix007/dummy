"use client"

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import styles from "../Common/dfeatures.module.css";
import RecordVoiceOverRoundedIcon from "@mui/icons-material/RecordVoiceOverRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import ContentPasteRoundedIcon from "@mui/icons-material/ContentPasteRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import FindInPageRoundedIcon from "@mui/icons-material/FindInPageRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Image from "next/image";
import { PrideBaseURL } from "@/utils/baseUrl";

const Idiscovery = () => {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();
  const [hover, setHover] = useState({
    idx: -1,
    color: "white",
  });

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const BenifitsOfInfluencerDiscovery = [
    {
      title: "Increases brand awareness & reach",
      icon: function Icon(color) {
        color = !color ? "red" : color;
        return (
          <RecordVoiceOverRoundedIcon
            style={{ height: "50px", width: "50px", color }}
          />
        );
      },
    },
    {
      title: "Builds credibility & trust",
      icon: function Icon(color) {
        color = !color ? "blue" : color;
        return (
          <HandshakeRoundedIcon
            style={{ height: "50px", width: "50px", color }}
          />
        );
      },
    },
    {
      title: "Saves cost & time",
      icon: function Icon(color) {
        color = !color ? "violet" : color;
        return (
          <AccessTimeFilledRoundedIcon
            style={{ height: "50px", width: "50px", color }}
          />
        );
      },
    },
    {
      title: "Improves sales & marketing",
      icon: function Icon(color) {
        color = !color ? "grey" : color;
        return (
          <SignalCellularAltRoundedIcon
            style={{ height: "50px", width: "50px", color }}
          />
        );
      },
    },
    {
      title: "Boosts sharing potential on SM",
      icon: function Icon(color) {
        color = !color ? "purple" : color;
        return (
          <ShareRoundedIcon style={{ height: "50px", width: "50px", color }} />
        );
      },
    },
    {
      title: "Enriches content strategy",
      icon: function Icon(color) {
        color = !color ? "brown" : color;
        return (
          <ContentPasteRoundedIcon
            style={{ height: "50px", width: "50px", color }}
          />
        );
      },
    },
  ];
  const [time, setTime] = useState(`${hours}:${seconds}`);
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  );

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, Aug 13 2022") {
      isActive = false;
    }
    const status = document.querySelector(".status");

    if (isActive === true) {
      status.innerHTML = "Active";
      status.style.color = "green";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };
  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense"];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Please do not use bad words";
        inputRef.value = "";
      }, 2000);
    }
    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");

      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Hello 😃";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = "";
      }, 2000);
    }

    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Bye, have a nice day";
        inputRef.value = "";
      }, 2000);
      setTimeout(() => {
        status.innerText = "Not active";
        status.style.color = "red";
      }, 5000);
    }
    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "You are welcome";
        inputRef.value = "";
      }, 2000);
    }
    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am fine, thank you 🥰";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = "";
      }, 2000);
    }
    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "😁";
        inputRef.value = "";
      }, 1000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "That is good";
        inputRef.value = "";
      }, 2000);
    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "My name is Bot";
        inputRef.value = "";
      }, 2000);
    }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "The owner of this bot is Treasure";
        inputRef.value = "";
      }, 2000);
    }

    let owner2 = [
      "Who's Treasure|who's Treasure|Who is Treasure|who is Treasure",
    ];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Treasure is a programmer based on ReactJS and NodeJS he is the owner of a youtube channel called Creative Tutorials";
        inputRef.value = "";
      }, 2000);
    }

    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
    ];
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am 1 year old";
        inputRef.value = "";
      }, 2000);
    }
    getHumanMessage.innerText = inputRef.value;
  };

  const bot = {
    width: "40%",
    padding: "15px",
    textAalign: "center",
    background: "#EDECED",
    fontStyle: "1.1em",
    borderRadius: "10px",
    margin: "0 20px 0",
  };
  const human = {
    width: "40%",
    padding: "15px",
    textAlign: "center",
    background: "#363062",
    color: "#EDECED",
    fontStyle: "1.1em",
    borderRadius: "10px",
    position: "relative",
    float: "right",
    top: "40px",
    marginBottom: "20px",
  };
  return (
    <>
      <div className="banner-area" style={{ height: "500px" }}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid" style={{ marginTop: "40px" }}>
              <div className="section-title">
                <h2 style={{ color: "white" }}>
                  Find the right influencers for your Brand Campaign from our
                  1M+ Influencer Database
                </h2>
                <p style={{ color: "white" }}>
                  Apply a set of filters to search for the perfect match of
                  Instagram, Twitter, YouTube and LinkedIn influencers
                </p>
                <br />
                <div className="banner-btn">
                  <Link legacyBehavior href="/demo_request">
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
              </div>
            </div>
          </div>
        </div>

        <div className="home-shape">
          <div className="shape1">
            <Image quality={90}  
              loading="lazy"
              src="/images/shape/shape1.png"
              width={20}
              height={20}
              alt="shape"
            />
          </div>
          <div className="shape2">
            <Image quality={90}  
              loading="lazy"
              src="/images/shape/shape2.png"
              width={20}
              height={20}
              alt="shape"
            />
          </div>
          <div className="shape3">
            <Image quality={90}  
              loading="lazy"
              src="/images/shape/shape3.png"
              width={20}
              height={20}
              alt="shape"
            />
          </div>
          <div className="shape4">
            <Image quality={90}  
              loading="lazy"
              src="/images/shape/shape4.png"
              width={20}
              height={20}
              alt="shape"
            />
          </div>
          <div className="shape5">
            <Image quality={90}  
              loading="lazy"
              src="/images/shape/shape5.png"
              width={20}
              height={20}
              alt="shape"
            />
          </div>
          <div className="shape6">
            <Image quality={90}  
              loading="lazy"
              src="/images/shape/shape6.png"
              width={20}
              height={20}
              alt="shape"
            />
          </div>
        </div>
      </div>
      <br />

      <div className="home-service-area">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontFamily: " sans-serif" }}>
              Benefits of Influencer Discovery
            </h2>
          </div>
          <div className="row">
            {BenifitsOfInfluencerDiscovery.map((ele, idx) => {
              const color = idx === hover.idx ? hover.color : null;
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
                  <div className="single-service">
                    <div className="service-img">{ele.icon(color)}</div>
                    <div className="service-content">
                      <h3>{ele.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="scrives-item-2 mt-4 ">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="services-img mb-qc">
                  <Image quality={90}  
                    loading="lazy"
                    className="imgshadow"
                    src="/images/pride-site/pg-6.png"
                    alt="pg-1"
                    width={600}
                    height={300}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h3>Track prospective influencers</h3>
                <p>
                  How about being able to track influencers who already talk
                  about your brand? With our Influencer Discovery tool by
                  HypeAuditor, you can search for such prospective influencers
                  who have talked about your brand in the past. Not just that,
                  you can also find loyal customers eligible to become your
                  brand influencers.
                </p>
                <hr></hr>
                <a
                  href={PrideBaseURL + "influencers"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      marginTop: "30px",
                      color: "#1d42d9",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Find your creater ➡️
                  </h5>
                </a>
              </div>
            </div>
          </div>

          <div className="scrives-item-2 mt-4 ">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3>Get your message across your target audience</h3>
                <p>
                  Discover influencers through their majority viewer’s location,
                  age, gender, ethnicity, and interests. Partner with the right
                  influencers to spread your message directly across your target
                  audience.
                </p>
                <hr></hr>
                <a
                  href={PrideBaseURL + "campaign"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      marginTop: "30px",
                      color: "#1d42d9",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Discover your ideal influencers ➡️
                  </h5>
                </a>
              </div>
              <div className="col-lg-6">
                <div className="services-img mb-qc">
                  <Image quality={90}  
                    loading="lazy"
                    className="imgshadow"
                    src="/images/pride-site/pg-8.png"
                    alt="Image"
                    width={600}
                    height={300}
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
                    loading="lazy"
                    className="imgshadow"
                    src="/images/pride-site/pg-4.png"
                    alt="Image"
                    width={600}
                    height={300}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h3>Niche & Trending influencers</h3>
                <p>
                  Use hashtags or keywords to search for the right influencers
                  in a specific niche. Find creators with exceptional growth
                  rate, or pick the rising stars providing affordable cost
                  prices.
                </p>
                <hr></hr>
                <a
                  href={
                    PrideBaseURL +
                    "featured-influencers?title=Top%2010%20Instagram%20influencers%20in%20India&social_media=Instagram&content=InstagramTopInfluencersInIndia"
                  }
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      marginTop: "30px",
                      color: "#1d42d9",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Search by growth rate ➡️
                  </h5>
                </a>
              </div>
            </div>
          </div>

          <div className="scrives-item-2 mt-4 ">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3>Partner only with quality and authentic influencers</h3>
                <p>
                  Our industry-standard fraud detection solution HypeAuditor
                  allows you to filter out low-quality accounts or fake
                  influencers with bot followers. This way you can save your
                  time and campaign budget by locating right influencers with
                  real audiences.{" "}
                </p>
                <hr></hr>
                <a
                  href={PrideBaseURL + "competitor-analysis"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      marginTop: "30px",
                      color: "#1d42d9",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Locate quality influencers ➡️
                  </h5>
                </a>
              </div>
              <div className="col-lg-6">
                <div className="services-img mb-qc">
                  <Image quality={90}  
                    loading="lazy"
                    className="imgshadow"
                    src="/images/pride-site/pg-9.png"
                    alt="Image"
                    width={600}
                    height={300}
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
                    loading="lazy"
                    className="imgshadow"
                    src="/images/pride-site/pg-3.png"
                    alt="Image"
                    width={600}
                    height={300}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h3>Find creators similar to top influencers</h3>
                <p>
                  Do you wish to expand your influencer network? With
                  HypeAuditor, you can search for new influencer profiles
                  similar to the successful influencers you are already aware
                  of. Use our lookalike search to find and onboard influencers
                  who share the similar content and/or audiences with your brand
                  ambassadors.
                </p>
                <hr></hr>
                <a
                  href={PrideBaseURL + "topinfluencers"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h5
                    style={{
                      marginTop: "30px",
                      color: "#1d42d9",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Select similar creators ➡️
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-btn" style={{ marginTop: "40px" }}>
          <center>
            <Link legacyBehavior href="/contact-us">
              <a className="box-btn">Book a Free Demo</a>
            </Link>
          </center>
        </div>
      </div>

      <div
        className="pricing-area pt-100 pb-70"
        style={{ backgroundColor: "#E8EEF1" }}
      >
        <div className="container">
          <h2>
            Discover Your Ideal Influencer <br /> in 4 Easy Steps 💯
          </h2>
          <br />

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-3">
              <div className="single-pricing">
                <FilterAltRoundedIcon
                  style={{ width: "40px", height: "40px", color: "blue" }}
                />
                <div className="pricing-top-heading">
                  <h3 style={{ marginTop: "30px" }}>
                    Apply search <br></br>filters
                  </h3>
                  <br />
                  <p>
                    Specify audience demographics, follower count, account
                    quality,
                    <br /> and other criteria that seem relevant.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3">
              <div className="single-pricing">
                <FindInPageRoundedIcon
                  style={{ width: "40px", height: "40px", color: "blue" }}
                />
                <div className="pricing-top-heading">
                  <h3 style={{ marginTop: "30px" }}>Type keywords</h3>
                  <br />
                  <br />
                  <p>
                    Amplify your selection process. Type in any keyword (e.g.,
                    ‘street style’) in the search bar to find niche influencers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3">
              <div className="single-pricing">
                <ListAltRoundedIcon
                  style={{ width: "40px", height: "40px", color: "blue" }}
                />
                <div className="pricing-top-heading">
                  <h3 style={{ marginTop: "30px" }}>
                    Organize influencers in lists
                  </h3>
                  <br />
                  <p>
                    Create as many influencer lists as you like. Download your
                    lists in a CSV file or share them with your team.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3">
              <div className="single-pricing">
                <AccountCircleRoundedIcon
                  style={{ width: "40px", height: "40px", color: "blue" }}
                />
                <div className="pricing-top-heading">
                  <h3 style={{ marginTop: "30px" }}>Proceed with candidates</h3>
                  <br />
                  <p>
                    Add selected influencers to your media plan, campaign or
                    mailing list to connect with the right candidates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-btn" style={{ marginTop: "10px" }}>
            <center>
              <Link legacyBehavior href="/contact-us">
                <a className="box-btn">Try it Now</a>
              </Link>
            </center>
          </div>
        </div>
      </div>

      <div className="choose-area pt-100 pb-70">
        <div className="container">
          <h2> FAQs about Influencer Discovery tool </h2>
          <br />
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="choose-content">
                <div className="faq-accordion">
                  <Accordion allowZeroExpanded preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What is Influencer Discovery?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Footpyrant Influencer Discovery tool is an easy-to-use
                          influencer search tool that provides the largest
                          database of over 66.7M creators on Instagram, YouTube,
                          TikTok, Twitter, and Twitch. Multiple filters in this
                          search tool helps you to easily find the ideal
                          influencers from any country or industry for your
                          brand campaign. Using keywords, you can tailor results
                          to your specific business needs by locating creators
                          through their majority viewer’s location, age, gender,
                          ethnicity, and interests.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Can I find influencers for free? Are there any free
                          tools in the Influencer Discovery platform?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          You can register and login to your HypeAuditor
                          Influencer Discovery account for free. You free
                          account allows you to use all the filters to sort out
                          the results and get a list of the most relevant
                          influencers. However, it will show you only the first
                          3 results. To view the full list, you will need to get
                          a paid subscription.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How can I find the right Social Media influencers?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Footprynt Influencer Discovery tool provides you with
                          a powerful solution to find your ideal match within
                          its 66.7M+ influencer database. Using a wide range of
                          filters, you can optimize your selection and pick
                          Social Media creators that best suit your brand’s
                          needs and goals. You can also expand your influencer
                          network by finding new influencers similar to the top
                          influencers using the ‘similar as’ filter.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How do I contact an influencer?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          By using the Footprynt, you’ll be easily able to find
                          the contact details of any influencer. However, it is
                          advised that before you reach out to them, you must
                          analyze their profile in detail, in order to craft
                          your pitch and negotiate in the best possible way.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="e">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How do I get influencers to promote my product?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Follow these steps to utilise the HypeAuditor
                          Influencer Discovery tool for your next brand
                          campaign: First, search through our existing
                          influencer database through the Influencer Outreach
                          tool. Filter the most relevant influencers and add
                          them to your Campaign Management dashboard, After
                          that, connect with the selected influencers via
                          personalized messages. Note that you’d need to build
                          relationships with influencers and base your
                          collaboration on shared touchpoints. In your
                          personalised message, try to convey what kind of
                          product you are offering, and who might evoke a sense
                          of curiosity or engagement among that influencer’s
                          audience. Lastly, finalize the discussions and track
                          your marketing metrics. That is, once both parties
                          agree to the proposed collaboration, you can easily
                          track and analyze the essential metrics of your
                          affiliate marketing campaigns such as ROI, CPC, CPE,
                          etc.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="f">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Why should I use Influencer Discovery tool?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Influencer marketing can either make it or break it!
                          Many businesses that want to add value to their
                          marketing campaigns, rely on advanced search tools
                          like HypeAuditor that provides them a list of ideal
                          influencers at their fingertips. What’s more,
                          Influencer Discovery’s fraud detection solution saves
                          your campaign budget by filtering out low-quality
                          accounts or fake influencers with bot followers and
                          locating authentic influencers with real audiences.
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
        className="feature-area bg-color pt-100 pb-70"
        style={{ backgroundColor: "#132460" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contnet">
                <div className="container">
                  <div className={styles.app} onLoad={checkStatus}>
                    <div className={styles.wrapper}>
                      <div className={styles.content}>
                        <div className={styles.header}>
                          <div>
                            <Image quality={90}  
                              width={50}
                              height={50}
                              loading="lazy"
                              className={styles.img}
                              src="/images/source/Image-1.webp"
                              alt="source-image"
                            />
                          </div>
                          <div className={styles.right}>
                            <div className={styles.name}>ChatBot😃</div>
                            <div className="status">Active</div>
                          </div>
                        </div>
                        <div className={styles.main}>
                          <div className={styles.main_content}>
                            <div className={styles.message}>
                              <div
                                style={bot}
                                className="bot-message"
                                id="message1"
                                ref={botmessage}
                              ></div>
                              <div
                                style={human}
                                className="human-message"
                                id="message2"
                                ref={humanMessage}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="bottom" style={{ margin: "100px 0 0" }}>
                          <div
                            className="btm"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div className="input">
                              <input
                                className={styles.input}
                                type="text"
                                id="input"
                                placeholder="Enter your message"
                                ref={input}
                              />
                            </div>
                            <div className={styles.btn}>
                              <button
                                className={styles.button}
                                onClick={handleInput}
                              >
                                <i
                                  style={{ marginLeft: "5px" }}
                                  className="fas fa-paper-plane"
                                ></i>
                                Send▶️
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-img">
                <Image quality={90}  
                  loading="lazy"
                  src="/images/chat.png"
                  alt="feature"
                  width={800}
                  height={600}
                />
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
                        Connect with our Sales Manager to get familiar with our
                        Influencer Marketing Platform
                      </p>
                      <Link legacyBehavior href="/about-us">
                        <a className="box-btn border-btn">Connect Now</a>
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
                        <a className="box-btn">Get Started for Free</a>
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

export default Idiscovery;
