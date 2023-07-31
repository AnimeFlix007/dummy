import Image from "next/image";
import React from "react";

const WorkingProcess = () => {
  return (
    <div className="home-process-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Working Process</span>
          <h2>
            We provide you an integrated solution-based approach. Our Work
            Process involves:
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="single-process">
              <div className="icon">
                <Image
                  width={80}
                  height={80}
                  loading="lazy"
                  src="/images/process/process1.png"
                  alt="process"
                />
                <span>
                  <Image
                    width={40}
                    height={40}
                    loading="lazy"
                    src="/images/process/next.png"
                    alt="shape"
                  />
                </span>
              </div>
              <div className="content">
                <h3>Research</h3>
                <p>
                  We do in-depth research about the client - their sector, brand
                  goals, objectives.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-process">
              <div className="icon">
                <Image
                  width={80}
                  height={80}
                  loading="lazy"
                  src="/images/process/process2.png"
                  alt="process"
                />
                <span className="pro-span">
                  <Image
                    width={40}
                    height={40}
                    loading="lazy"
                    src="/images/process/next.png"
                    alt="shape"
                  />
                </span>
              </div>
              <div className="content">
                <h3>Development</h3>
                <p>
                  Next, we integrate the analysis to the brand goals and create
                  a structured plan. Either for service execution or tech
                  product alteration.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-process">
              <div className="icon">
                <Image
                  width={80}
                  height={80}
                  loading="lazy"
                  src="/images/process/process3.png"
                  alt="process"
                />
                <span>
                  <Image
                    width={40}
                    height={40}
                    loading="lazy"
                    src="/images/process/next.png"
                    alt="shape"
                  />
                </span>
              </div>
              <div className="content">
                <h3>User Testing</h3>
                <p>
                  A small pilot in tech or services is suggested, the pilot’s
                  results are thoroughly analysed and matched with brand goals.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-process">
              <div className="icon">
                <Image
                  width={80}
                  height={80}
                  loading="lazy"
                  src="/images/process/process4.png"
                  alt="process"
                />
              </div>
              <div className="content">
                <h3>Product/Service Execution</h3>
                <p>
                  Once approved by the brand, the plan is executed - in a
                  jaw-dropping turnaround time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
