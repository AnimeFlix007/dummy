
import Ianalytics from "@/app/components/Common/Ianalytics";
import Footer from "@/app/components/_App/Footer";
import Navbar from "@/app/components/_App/Navbar";
import Head from "next/head";
const InfluencerAnalytics = () => {
  return (
    <>
      <Head>
        <title>Influencer Analytics</title>
        <meta
          name="description"
          content="Instagram, Twitter and YouTube Influencer Profile analytics, Basic influencer details, 
                Accurate Audience Demographics, Best-in-Class Fraud Detection Solution, Detailed estimated engagement projections, Content Analysis, 
                Estimated Price for Sponsored Content, Create an account to access 1M+ influencer profile data and analytics"
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

      <Ianalytics />
      <Footer />
    </>
  );
};

export default InfluencerAnalytics;
