import Image from "next/image";
import Link from "next/link";

const InfluencerMarketingContent = () => {
  return (
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
                <h2>Influencer Marketing</h2>
                <p style={{ fontWeight: "bold" }}>
                  With over 1000+ influencer marketing campaigns under our belt,
                  footprynt is one of India&#8217;s oldest and most trusted
                  influencer marketing agencies.
                </p>
                <p>
                  In 2017, Footprynt was one of the first agencies to launch
                  influencer marketing in India.{" "}
                </p>
                <p>
                  We have end-to-end influencer marketing solutions for all
                  businesses - from planning and execution to shortlisting and
                  managing creative content by influencers and achieving desired
                  results.{" "}
                </p>
                <p>
                  {" "}
                  We have executed over 1000+ campaigns on over 13 different
                  platforms using every genre of influencer be it celebrities,
                  influencers or even nano influencers. We have done it all.{" "}
                </p>
                <p>
                  Our expertise will help you achieve your brand goals and
                  beyond!{" "}
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
                src="/images/solutions-details/influencerWhat.png"
                width={500}
                height={450}
                alt="company"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerMarketingContent;
