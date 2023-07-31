import Head from "next/head";
import ClientOnly from "@/app/client/ClientOnly";
import Navbar from "@/app/components/_App/Navbar";
import PageBanner from "@/app/components/Common/PageBanner";
import AboutUsArea from "@/app/components/AboutUs/AboutUsArea";
import Features from "@/app/components/Common/Features";
import OurCompany from "@/app/components/AboutUs/OurCompany";
import TechnologyUpdate from "@/app/components/Common/TechnologyUpdate";
import TeamMembers from "@/app/components/Common/TeamMembers";
import Testimonials from "@/app/components/Common/Testimonials";
import Footer from "@/app/components/_App/Footer";

const AboutUs = () => {

  return (
    <>
      <Head>
        <title>About us</title>
        <meta
          name="description"
          content="Footprynt is a digital marketing agency specialising in influencer marketing, digital media buying and selling, content management and creative services, 1000+ campaigns executed,
                5000+ influencer videos created on Instagram, 10000+ trended hours on Twitter, Google ad campaigns for the biggest dot coms, 70+ clients - 4 unicorns, 3 media conglomerates, biggest FMCG brand,
                We are footprynt. Let's create your digital footprynt,"
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
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
      />

      <AboutUsArea />

      <Features />

      <OurCompany />

      <TechnologyUpdate />

      <TeamMembers />
      <ClientOnly>
        <Testimonials />
      </ClientOnly>

      <Footer />
    </>
  );
};

export default AboutUs;
