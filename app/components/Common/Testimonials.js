"use client"

import Image from "next/image";
import OwlCarousel from "react-owl-carousel3";

const options = {
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  mouseDrag: true,
  touchDrag: true,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  navText: [
    "<i className='bx bx-left-arrow-alt'></i>",
    "<i className='bx bx-right-arrow-alt'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
  },
};

const Testimonials = () => {
  return (
    <div className="client-area ptb-100 bg-color">
      <div className="container">
        <div className="section-title">
          <span>Testimonials</span>
          <h2>What our clients say</h2>
          <p>Honest and Straightforward Feedback</p>
        </div>

          <OwlCarousel
            className="client-wrap owl-carousel owl-theme"
            {...options}
          >
            <div
              className="single-client"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <Image
                quality={90}
                width={65}
                height={65}
                loading="lazy"
                src="/images/clients/SnehaShenoy.jpg"
                alt="client-img"
              />

              <p>
                Footprynt has been my go to agency in the last three jobs of
                mine. Looking at working with them in the future.
              </p>

              <h3>Sneha Shenoy</h3>
              <span>Brand Manager - Digital MX Takatak</span>
            </div>

            <div
              className="single-client"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <Image
                quality={90}
                width={65}
                height={65}
                loading="lazy"
                src="/images/clients/ChandanRoy.jpg"
                alt="client-img"
              />
              <p>
                Footprynt helps us add value to the brands who come onboard for
                our properties. They bring in a niche and expertise rarely seen
                in this industry.
              </p>

              <h3>Chandan Roy</h3>
              <span>Sales Head - Star Sports</span>
            </div>

            <div
              className="single-client"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <Image
                quality={90}
                width={65}
                height={65}
                loading="lazy"
                src="/images/clients/SmritaSingh.jpg"
                alt="client-img"
              />
              <p>
                Footprynt helped us increase the brand presence through curated
                influencer campaigns
              </p>

              <h3>Smrita Singh</h3>
              <span>Head - Corporate Communications - Dream Sports</span>
            </div>

            <div
              className="single-client"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <Image
                quality={90}
                loading="lazy"
                src="/images/clients/GibsonSequeira.jpg"
                alt="client-img"
                width={65}
                height={65}
              />

              <p>
                FWe have created over 2000+ videos using influencers with
                footprynt. The team is enthusiastic and very efficient with
                their work. The volume of the work and the quality is a
                testimonial to that.
              </p>

              <h3>Gibson Sequeira </h3>
              <span>Manager - Zee </span>
            </div>

            <div
              className="single-client"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <Image
                quality={90}
                width={65}
                height={65}
                loading="lazy"
                src="/images/clients/RohanPatil.jpg"
                alt="client-img"
              />
              <p>
                The work ethic is phenomenal and the personalization even
                better. This is the agency for all influencers I need.
              </p>

              <h3>Rohan Patil</h3>
              <span>Vice President Brand Marketing - Angel Broking</span>
            </div>

            <div
              className="single-client"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <Image
                quality={90}
                width={65}
                height={65}
                loading="lazy"
                src="/images/clients/VinayBharathwas.jpg"
                alt="client-img"
              />
              <p>
                Stockal influencer marketing is managed by Footprynt. They have
                a dedicated team which has worked on all our campaigns with
                extremely good results. We can say we have achieved all our
                goals.
              </p>

              <h3>Vinay Bharatwaj</h3>
              <span>Co founder - Stockal</span>
            </div>
          </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonials;
