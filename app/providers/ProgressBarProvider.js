"use client"

import NextTopLoader from 'nextjs-toploader';

const ProgressBarProvider = () => {
  return (
    <>
      <NextTopLoader
         color="#2299DD"
         initialPosition={0.08}
         crawlSpeed={200}
         height={3}
         crawl={true}
         showSpinner={true}
         easing="ease"
         speed={200}
         shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
    </>
  );
};

export default ProgressBarProvider;
