import Footer from "@/app/components/_App/Footer";
import Navbar from "@/app/components/_App/Navbar";
import PageBanner from "@/app/components/Common/PageBanner";
import FaqContent from "@/app/components/Faq/FaqContent";
import FaqForm from "@/app/components/Faq/FaqForm";

export const metadata = {
  title: "Footprynt - Influencer Discovery",
  description:
    "Increases brand awareness & reach, Builds credibility & trust, Saves cost & time, Improves sales & marketing, Boosts sharing potential on SM, Enriches content strategy, Track prospective influencers, Get your message across your target audience, Niche & Trending influencers, Partner only with quality and authentic influencers, Find creators similar to top influencers",
};

const Faq = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="FAQ"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ"
      />
      <FaqContent />
      <FaqForm />
      <Footer />
    </>
  );
};

export default Faq;
