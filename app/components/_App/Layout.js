"use client"

import React from "react";
import Head from "next/head";
import Preloader from "./Preloader";

const Layout = ({ children }) => {
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);

  return (
    <>
      <Head>
        <title>Footprynt - Digital Marketing Company</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Footprynt - Digital Marketing Company,A digital ecosystem of
                    brands, influencers & content experts, Influencer marketing, Social media marketing, SEO, CRO & Content Management, Marketing Automation,
                    Media buying and selling, Campaign Analytics, Influencer Analytics, Influencer Discovery, Campaign Management"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Footprynt - Digital Marketing Company"
        ></meta>
        <meta
          name="twitter:card"
          content="Footprynt - Digital Marketing Company"
        ></meta>
        <link rel="canonical" href="https://footprynt.in/"></link>
      </Head>

      {children}

      {loader ? <Preloader /> : null}
    </>
  );
};

export default Layout;
