import Image from "next/image";
import ReactPlayerProvider from "@/app/providers/ReactPlayerProvider";

const TechnologyUpdate = () => {
  return (
    <div className="technology-area ptb-100 bg-color">
      <div className="container">
        <div className="row align-items-center choose-c">
          <div className="col-lg-6">
            <div className="choose-img">
              <Image quality={90}   width={600} height={300} loading="lazy" src="/images/choose-bg.png" alt="choose" />
              <ReactPlayerProvider />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="technology-content">
              <h2>Updated Technology</h2>
              <p>
                We understand your Business model &amp; Industry thoroughly to
                design the most efficient digital marketing strategies.
                Footprynt works on an effective &amp; efficient methodology
                which leads to the formation of Digital Marketing Strategy in
                coherence with insights extracted through detailed analysis.
              </p>
              <h4>Influencer Footprynt</h4>
              <p>
                Not just for the brands, Footprynt is the most favorite partner
                for many influencers. Footprynt has provided great opportunities
                to many influencers by connecting them to the right brands.
              </p>

                <a href="/contact-us" className="box-btn">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyUpdate;
