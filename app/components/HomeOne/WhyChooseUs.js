"use client" 

import React from "react";
import Image from "next/image";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WhyChooseUs = () => {
  return (
    <div className="choose-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Why choose us?</span>
          <h2>
            Our services have earned us more than just revenue. They have earned
            us trust.
          </h2>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="choose-img">
              <Image
                quality={90}
                loading="lazy"
                src="/images/choose-img.png"
                alt="choose"
                width={500}
                height={400}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="choose-content">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>Client-focused</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We believe in putting you first and work hard to
                        accomplish your goals and objectives.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Technology Driven
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Very few agencies understand technology and no one
                        understands advertising technology better than us. With
                        some of the best techies from top institutions working
                        with us, we rarely suggest a non-tech solution.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Experienced Team
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        A team of techies, advertisers, media and content
                        professionals. The team is dedicated, the team is
                        fabulous.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Top Quality Service
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Our team of skilled professionals is always at your beck
                        and call, creating impactful campaigns.
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
  );
};

export default WhyChooseUs;
