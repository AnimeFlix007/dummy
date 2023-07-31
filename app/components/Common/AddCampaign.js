import Link from "next/link";
import Image from "next/image";

const AddCampaign = () => {
  return (
    <>
      <div className="home-service-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Campaigns</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <Image
                    quality={90}
                    loading="lazy"
                    src="/images/icons/instagram.png"
                    alt="service"
                    width={50}
                    height={50}
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                </div>

                <div className="service-content">
                  <h3> Instagram Campaign</h3>
                  <p>
                    Reach people more likely to pay attention to your campaign
                    and increase awareness for your brand
                  </p>
                  <br />
                  <Link
                    href={{
                      pathname: "/addcampaign",
                      query: { q: "instagram" },
                    }}
                    className="box-btn"
                  >
                    Add Campaign
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <Image
                    quality={90}
                    loading="lazy"
                    src="/images/icons/youtube-icon.jpg"
                    alt="service"
                    width={50}
                    height={50}
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                </div>

                <div className="service-content">
                  <h3>YouTube Campaign</h3>
                  <p>
                    Depending on what you really want to achieve on the
                    platform, you should choose one or the other when defining
                    your strategy.
                  </p>

                  <Link
                    href={{
                      pathname: "/addcampaign",
                      query: { q: "youtube" },
                    }}
                    className="box-btn"
                  >
                    Add Campaign
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <Image
                    quality={90}
                    loading="lazy"
                    src="/images/icons/TwitterIcon.png"
                    alt="service"
                    width={50}
                    height={50}
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                </div>

                <div className="service-content">
                  <h3>Twitter Campaign</h3>
                  <p>
                    Get people to start thinking about your business and seeking
                    more information about the products and services that you
                    offer
                  </p>

                  <Link
                    href={{
                      pathname: "/addcampaign",
                      query: { q: "twitter" },
                    }}
                    className="box-btn"
                  >
                    Add Campaign
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCampaign;
