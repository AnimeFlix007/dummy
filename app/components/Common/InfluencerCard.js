import Image from "next/image";
import Link from "next/link";
import TotalAvatars from "./AvatarGroup";
import ClientOnly from "@/app/client/ClientOnly";

const cardstyle = {
  marginTop: "1rem",
  boxShadow:
    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
  borderRadius: "1rem",
  height: "10rem",
  width: "22rem",
  backgroundColor: "#000b2f",
  cursor: "pointer",
};

const InfluencerCard = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="section-title" style={{ marginTop: "2rem" }}>
          <h2>Top Influencers</h2>
        </div>

        <div className="content-tabs">
          <div className="row" style={{  
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"
          }}>
            <div className="col-lg-4 col-sm-6">
              <Link href="/feature_influencer?title=Top 10 Twitter Influencers&content=toptwitter&socialmedia=twitter&tab=1">
                <div className="card" style={cardstyle}>
                  <div
                    className="service-content"
                    style={{ marginTop: "1rem", marginBottom: "1rem" }}
                  >
                    <center>
                      <Image
                        quality={90}
                        width={50}
                        height={50}
                        loading="lazy"
                        src="/images/icons/TwitterIcon.png"
                        alt="social-media"
                        style={{
                          borderRadius: "50%",
                        }}
                      />
                      <h3 style={{ color: "white" }}>
                        {" "}
                        Top Twitter Influencers
                      </h3>
                    </center>
                    <ClientOnly>
                      <TotalAvatars />
                    </ClientOnly>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Link href="/feature_influencer?title=Top 10 YouTube Channels with millions of Subscribers&content=topyoutube&socialmedia=youtube&tab=1">
                <div className="card" style={cardstyle}>
                  <div
                    className="service-content"
                    style={{ marginTop: "1rem", marginBottom: "1rem" }}
                  >
                    <center>
                      <Image
                        quality={90}
                        width={50}
                        height={50}
                        loading="lazy"
                        alt="social-media"
                        src="/images/icons/youtube-icon.jpg"
                        style={{
                          borderRadius: "50%",
                        }}
                      />
                      <h3 style={{ color: "white" }}>
                        {" "}
                        Top YouTube Influencers
                      </h3>
                    </center>
                    <ClientOnly>
                      <TotalAvatars />
                    </ClientOnly>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-sm-6">
              <Link href="/feature_influencer?title=Top 10 Instagram Influencers&content=topinstagram&socialmedia=instagram&tab=1">
                <div className="card" style={cardstyle}>
                  <div
                    className="service-content"
                    style={{ marginTop: "1rem", marginBottom: "1rem" }}
                  >
                    <center>
                      <Image
                        quality={90}
                        width={50}
                        height={50}
                        alt="social-media"
                        loading="lazy"
                        src="/images/icons/instagram.png"
                        style={{
                          borderRadius: "50%",
                        }}
                      />
                      <h3 style={{ color: "white" }}>
                        {" "}
                        Top Instagram Influencers
                      </h3>
                    </center>
                    <ClientOnly>
                      <TotalAvatars />
                    </ClientOnly>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfluencerCard;
