import React from "react";
import Image from "next/image";

const TeamMembers = () => {
  return (
    <div className="home-team-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Team Members</span>
          <h2>People behind the achievements</h2>
          <p>
            A team of digital marketing experts with experience in building
            advertising tech products, creating digital campaigns, influencer
            campaigns and marketing automation.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-img">
                <Image quality={90}  
                  loading="lazy"
                  src="/images/team/pratik.jpg"
                  alt="team"
                  width={420}
                  height={400}
                />

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/pratik.gour1986">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/iamgroot86">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/pratik-gour-82111620/">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/pratikgour1986/">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="content text-center">
                <h3>Pratik Gour</h3>
                <p>Director, Marketing</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-img">
                <Image quality={90}  
                  loading="lazy"
                  src="/images/team/anand.jpg"
                  alt="team"
                  width={420}
                  height={400}
                />
                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/anandrthakur8">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/_iamthakur">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/anand-thakur-359aa66/">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/anandrthakur">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="content text-center">
                <h3>Anand Thakur</h3>
                <p>Director, Product Development</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-team">
              <div className="team-img">
                <Image quality={90}  
                  loading="lazy"
                  src="/images/team/manoj.jpg"
                  alt="team"
                  width={420}
                  height={400}
                />
                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/iitm.manoj">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/ManojAmpolu">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/manoj-ampolu-454b411b/">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/manoj_ampolu/"
                      target="https://www.instagram.com/manoj_ampolu/"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="content text-center">
                <h3>Manoj Ampolu</h3>
                <p>Director, Technical Architect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
