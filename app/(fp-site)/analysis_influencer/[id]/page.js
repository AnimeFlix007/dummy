import ClientOnly from "@/app/client/ClientOnly";
import PageBanner from "@/app/components/Common/PageBanner";
import Footer from "@/app/components/_App/Footer";
import Navbar from "@/app/components/_App/Navbar";
import InfluencerDetails from "@/app/components/influencer/InfluencerDetails";
import inflluencers from "@/public/data/Influencers";
// import { ServicesURL } from "@/utils/baseUrl";

export function generateStaticParams() {
  return Array(30)
    .map((ele, i) => ({
      id: String(i+1),
    }));
}

const Analyse = async ({ params: { id } }) => {
  // const response = await fetch(ServicesURL + "dev/?filter=allinfluencers");
  // const data = await response.json();

  const influencer = inflluencers.find((ele) =>
    ele.id.toString() === id.toString()
  );

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
      />
      <ClientOnly>
        <InfluencerDetails influencer={influencer} />
      </ClientOnly>
      <Footer />
    </>
  );
};

export default Analyse;
