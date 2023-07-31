"use client";

import { useState, useEffect } from "react";
// import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
// import { ServicesURL } from "@/utils/baseUrl";
import influencers from "@/public/data/Influencers";

const SuggestedModal = dynamic(() => import("./SuggestedModal"));

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const SearchNavigatehandler = () => {
    text.length > 0 &&
      suggestions.length === 0 &&
      router.push(`/error_page/${text}`);
  };
  const NavigateInfluencerHandler = (influencer) => {
    // if(influencer.influencer_handle_name.startsWith("@")){
    //   router.push(
    //     `/analysis_influencer/${String(influencer.influencer_handle_name).substring(1)}`
    //   );
    // } else {
    //   router.push(
    //     `/analysis_influencer/${influencer.influencer_handle_name}`
    //   );
    // }
    router.push(`/analysis_influencer/${influencer.id}`);
    setText("");
    setSuggestions([...users]);
    handleClose();
  };

  useEffect(() => {
    (async () => {
      try {
        // const response = await axios.get(
        //   `${ServicesURL}dev/?filter=allinfluencers`
        // );
        // setUsers(response.data);
        // setSuggestions(response.data);
        setUsers(influencers);
        setSuggestions(influencers);
      } catch (error) {
        console.log("Unable to react the server. Please try after sometime");
      }
    })();
  }, []);

  const onChangeHandler = (text) => {
    if (text == "") {
      setSuggestions(users);
      setText("");
      return;
    }
    let matches = [];
    if (text.length > 0) {
      matches = users.filter(
        (user) =>
          String(user.influencer_name)
            .toLowerCase()
            .includes(text.toLowerCase()) ||
          String(user.influencer_handle_name)
            .toLowerCase()
            .includes(text.toLowerCase())
      );
    }
    setSuggestions(matches);
    setText(text);
  };

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>
              <a
                href="/"
                onClick={toggleNavbar}
                className="navbar-brand"
                style={{ maxWidth: "200px" }}
                aria-label="footprynt"
              >
                <Image
                  quality={90}
                  loading="lazy"
                  src="/images/fp_business_logo_3.png"
                  alt="logo"
                  height={50}
                  width={200}
                />
              </a>

              <div className={classOne} id="navbarSupportedContent">
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="logo">
                    <a href="/" aria-label="footprynt">
                      <Image
                        quality={90}
                        loading="lazy"
                        src="/images/fp_business_logo_3.png"
                        alt="navbar-logo"
                        width={300}
                        height={75}
                      />
                    </a>
                  </div>
                </div>

                <ul className="navbar-nav text-left">
                  <li className="nav-item">
                    {open && (
                      <SuggestedModal
                        handleClose={handleClose}
                        text={text}
                        suggestions={suggestions}
                        SmallAvatar={
                          <Image alt="avatar" width={30} height={30} />
                        }
                        open={open}
                        SearchNavigatehandler={SearchNavigatehandler}
                        onChangeHandler={onChangeHandler}
                        NavigateInfluencerHandler={NavigateInfluencerHandler}
                      />
                    )}
                    <a
                      aria-label="search"
                      // href="#"
                      className="nav-link"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        cursor: "pointer",
                      }}
                      onClick={handleOpen}
                    >
                      <i
                        className="bx bx-search"
                        style={{ marginRight: "4px" }}
                      ></i>
                      <span>Search</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      aria-label="influencer-marketing"
                      href="#"
                      className="nav-link dropdown-toggle"
                    >
                      Product
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="/product/discovery"
                          aria-label="influencer-Discovery"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Influencer Discovery
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/product/analytics"
                          aria-label="influencer-Analytics"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Influencer Analytics
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/product/campaign"
                          aria-label="Campaign-Management"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Campaign Management
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      aria-label="Solutions"
                    >
                      Solutions
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a
                          aria-label="Influencer-marketing"
                          href="/solutions/influencer_marketing"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Influencer Marketing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={toggleNavbar}
                          className="nav-link"
                          aria-label="social-media-marketing"
                          href="/solutions/social_marketing"
                        >
                          Social Media Marketing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={toggleNavbar}
                          className="nav-link"
                          href="/solutions/content_management"
                          aria-label="SEO, CRO & Content Management"
                        >
                          SEO, CRO & Content Management
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={toggleNavbar}
                          className="nav-link"
                          href="/solutions/marketing_automation"
                          aria-label="Marketing Automation"
                        >
                          Marketing Automation
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={toggleNavbar}
                          className="nav-link"
                          href="/solutions/media_buying"
                          aria-label="Media Buying and Selling "
                        >
                          Media Buying and Selling
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={toggleNavbar}
                          className="nav-link"
                          href="/solutions/campaign_analytics"
                          aria-label="Campaign Analytics"
                        >
                          Campaign Analytics
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a
                      aria-label="Marketing Automation"
                      href="#"
                      className="nav-link dropdown-toggle"
                    >
                      Resources
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="/" onClick={toggleNavbar} className="nav-link">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/about-us"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={toggleNavbar}
                          className="nav-link"
                          href="/feature_influencer?title=Top 10 influencers with most followers&content=toptwitter&socialmedia=twitter&tab=1"
                        >
                          Twitter Influencers
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/feature_influencer?title=Top 10 YouTube Channels with millions of Subscribers&content=topyoutube&socialmedia=youtube&tab=1"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          YouTube Influencers
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={toggleNavbar}
                          className="nav-link"
                          href="/feature_influencer?title=Top 10 Instagram Influencers with most followers&content=topinstagram&socialmedia=instagram&tab=1"
                        >
                          Instagram Influencers
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          onClick={toggleNavbar}
                          className="nav-link"
                          href="/contact-us"
                        >
                          Contact
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/team"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Team
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          onClick={toggleNavbar}
                          className="nav-link"
                          href="/testimonials"
                        >
                          Testimonials
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/faq"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          FAQ
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/case-studies"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Case Studies
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/blog"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Blog
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/terms-conditions"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="/privacy-policy"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/pricing"
                      onClick={toggleNavbar}
                      className="nav-link"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>

                <div className="others-options d-flex align-items-center ms-auto">
                  <div className="nav-btn">
                    <a href="/contact-us" className="box-btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
