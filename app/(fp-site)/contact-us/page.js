import ContactForm from "@/app/components/ContactUs/ContactForm";
import ContactInfo from "@/app/components/ContactUs/ContactInfo";
import Footer from "@/app/components/_App/Footer";
import Navbar from "@/app/components/_App/Navbar";
import PageBanner from "@/app/components/Common/PageBanner";

export const metadata = {
  title: "Footprynt - Contact Us",
  description:
    "Footprynt - Digital Marketing Company,A digital ecosystem of brands, influencers & content experts, Influencer marketing, Social media marketing, SEO, CRO & Content Management, Marketing Automation, Media buying and selling, Campaign Analytics, Influencer Analytics, Influencer Discovery, Campaign Management",
};

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <PageBanner />
      <ContactForm title="Ready for your first campaign? Fill in the form below" />
      <ContactInfo />
      <Footer />
    </>
  );
};

export default ContactUs;
