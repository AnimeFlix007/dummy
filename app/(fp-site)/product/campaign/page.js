import React from "react";
import Head from "next/head";
import Navbar from "@/app/components/_App/Navbar";
import Footer from "@/app/components/_App/Footer";
import Cmanagement from "@/app/components/Common/Cmanagement";

const CampaignManagement = () => {
  return (
    <>
      <Head>
        <title>Campaign Management</title>
        <meta
          name="description"
          content="All-in-one data-driven solution for your Influencer Campaign Management,
                Streamline the process of influencer campaign planning, optimization and execution at one place. Footprynt provides significant tools to run high-impact campaigns right from creating influencer lists to providing final reports and analytics."
        />
        <meta
          name="og:title"
          property="og:title"
          content="social media marketing,social media marketing agency,social media marketing platforms,best social media marketing agency,influencer discovery platform,
                influencer collaboration platform,influencer analytics platform,influencer brand analysis,influencer campaign analytics,social media influencer analytics platform,campaign management in digital marketing,
                campaign management digital marketing,campaign management platform,marketing automation platforms,marketing campaign management software open source"
        />
      </Head>
      <Navbar />
      <Cmanagement />
      <Footer />
    </>
  );
};

export default CampaignManagement;