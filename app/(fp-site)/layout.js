import "@/public/css/bootstrap.min.css";
import "@/public/css/meanmenu.css";
import "@/public/css/animate.min.css";
import "@/public/css/rtl.css";
import "@/public/css/style.css";
import "@/public/css/global.css";
import "@/public/css/responsive.css";
import { Inter } from "next/font/google";
import ProgressBarProvider from "../providers/ProgressBarProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Footprynt - Digital Marketing Company",
  description:
    "Footprynt - Digital Marketing Company,A digital ecosystem of brands, influencers & content experts, Influencer marketing, Social media marketing, SEO, CRO & Content Management, Marketing Automation, Media buying and selling, Campaign Analytics, Influencer Analytics, Influencer Discovery, Campaign Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          async
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <link
          async
          rel="icon"
          type="image/png"
          href="/images/fplogo.png"
        ></link>
      </head>
      <body className={inter.className}>
        <ProgressBarProvider />
        {children}
      </body>
    </html>
  );
}
