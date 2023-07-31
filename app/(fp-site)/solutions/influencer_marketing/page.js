import Navbar from "@/app/components/_App/Navbar";
import PageBanner from "@/app/components/Common/PageBanner";
import Footer from "@/app/components/_App/Footer";
import Head from "next/head";
import InfluencerMarketingContent from "@/app/components/solution/InfluencerMarketingContent";

const InfluencerMarketing = () => {
  return (
    <>
      <Head>
        <title>Influencer Marketing</title>
        <meta
          name="description"
          content="With over 1000+ influencer marketing campaigns under our belt, footprynt is one of India’s oldest and most trusted influencer marketing agencies."
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
      <PageBanner
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
      />
      <InfluencerMarketingContent />
      <Footer />
    </>
  );
};

export default InfluencerMarketing;
