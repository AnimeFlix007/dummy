import Image from "next/image";
import React from "react";

const PageBanner = () => {
  return (
    <div className="page-title-area">
      <div className="page-shape">
        <div className="shape3">
          <Image quality={90}  
            width={20}
            height={20}
            loading="lazy"
            src="/images/shape/shape3.png"
            alt="shape"
          />
        </div>
        <div className="shape4">
          <Image quality={90}  
            width={20}
            height={20}
            loading="lazy"
            src="/images/shape/shape4.png"
            alt="shape"
          />
        </div>
        <div className="shape6">
          <Image quality={90}  
            width={20}
            height={20}
            loading="lazy"
            src="/images/shape/shape6.png"
            alt="shape"
          />
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
