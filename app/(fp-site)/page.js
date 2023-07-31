// import Navbar from "./components/_App/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import SmartServices from "../components/Common/SmartServices";
import OurCompany from "../components/HomeOne/OurCompany";
import WorkingProcess from "../components/Common/WorkingProcess";
import WhyChooseUs from "../components/HomeOne/WhyChooseUs";
import CaseStudies from "../components/Common/CaseStudies";
import AddCampaign from "../components/Common/AddCampaign";
import Features from "../components/Common/Features";
import InfluencerCard from "../components/Common/InfluencerCard";
import Testimonials from "../components/Common/Testimonials";
import BlogPost from "../components/Common/BlogPost";
import ContactUs from "../components/Common/ContactUs";
import Footer from "../components/_App/Footer";
import ClientOnly from "../client/ClientOnly";
import Navbar from "../components/_App/Navbar";

export default function Home() {
  return (
    <>
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <MainBanner />
      <SmartServices />
      <OurCompany />
      <WhyChooseUs />
      <WorkingProcess />
      <CaseStudies />
      <AddCampaign />
      <Features />
      <InfluencerCard />
      <ClientOnly>
        <Testimonials />
      </ClientOnly>
      <BlogPost />
      <ContactUs />
      <Footer />
    </>
  );
}
