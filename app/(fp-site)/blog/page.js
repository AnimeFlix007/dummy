import PageBanner from "@/app/components/Common/PageBanner";
import Footer from "@/app/components/_App/Footer";
import Navbar from "@/app/components/_App/Navbar";
import Head from "next/head";
import Image from "next/image";
import "@/public/css/style.css";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta
          name="description"
          content="Integrated Marketing Campaigns - Why You Need It and How To Create One, Reasons Why You Absolutely NEED Influencer Marketing,
                Influencer Marketing After TikTok, The Ultimate Guide To Alternatives Of TikTok, Instagram Reels : The new TikTok, A BRIEF RUNDOWN OF SOCIAL MEDIA SITES OF ALL TIME,
                INFLUENCER MARKETING AUTOMATION, Social Media Engagement Rates On The Fall, INFLUENCER MARKETING VS AFFILIATE MARKETING"
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
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
      />

      <div className="home-blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Blog Posts</span>
            <h2> We bring you the latest trends in Digital Marketing</h2>
            <p>Read through the latest trends in Digital Marketing</p>
          </div>
          <div className="row">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="casecard">
                  <div className="single-blog">
                    <div className="blog-img">
                      <a href={"/blog-details/9"}>
                        <Image
                          quality={90}
                          loading="lazy"
                          src="/images/blog/IntegratedMarketingCampaigns.jpg"
                          alt="blog"
                          className="caseimage"
                          width={500}
                          height={300}
                        />
                      </a>
                    </div>
                    <div className="content">
                      <ul>
                        <li>10 April 2022</li>
                        <li>
                          <a href="[object Object]"></a>
                        </li>
                      </ul>

                      <Link href={"/blog-details/9"}>
                        <h3>
                          Integrated Marketing Campaigns - Why You Need It and
                          How To Create One
                        </h3>
                      </Link>
                      <Link href={"/blog-details/9"}>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="casecard">
                  <div className="single-blog">
                    <div className="blog-img">
                    <Link href={"/blog-details/8"}>
                        <Image
                          quality={90}
                          loading="lazy"
                          src="/images/blog/influencerMarketing.png"
                          alt="blog"
                          className="caseimage"
                          width={500}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <ul>
                        <li>10 March 2021</li>
                        <li>
                          <a href="[object Object]"></a>
                        </li>
                      </ul>
                      <Link href={"/blog-details/8"}>
                        <h3>
                          Reasons Why You Absolutely NEED Influencer Marketing
                        </h3>
                      </Link>
                      <Link href={"/blog-details/8"}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="casecard">
                  <div className="single-blog">
                    <div className="blog-img">
                    <Link href={"/blog-details/7"}>
                        <Image
                          quality={90}
                          loading="lazy"
                          src="/images/blog/blog2.jpg"
                          alt="blog"
                          className="caseimage"
                          width={500}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <ul>
                        <li>10 January 2021</li>
                        <li>
                          <a href="[object Object]"></a>
                        </li>
                      </ul>
                      <Link href={"/blog-details/7"}>
                        <h3>Influencer Marketing After TikTok</h3>
                      </Link>
                      <Link href={"/blog-details/7"}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="casecard">
                  <div className="single-blog">
                    <div className="blog-img">
                    <Link href={"/blog-details/6"}>
                        <Image
                          quality={90}
                          loading="lazy"
                          src="/images/blog/blog1.jpg"
                          alt="blog"
                          className="caseimage"
                          width={500}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <ul>
                        <li>10 November 2020</li>
                        <li>
                          <a href="[object Object]"></a>
                        </li>
                      </ul>
                      <Link href={"/blog-details/6"}>
                        <h3>The Ultimate Guide To Alternatives Of TikTok</h3>
                      </Link>
                      <Link href={"/blog-details/6"}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="casecard">
                  <div className="single-blog">
                    <div className="blog-img">
                    <Link href={"/blog-details/5"}>
                        <Image
                          quality={90}
                          loading="lazy"
                          src="/images/blog/reels_vs_tiktok1.png"
                          alt="blog"
                          className="caseimage"
                          width={500}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <ul>
                        <li>10 August 2020</li>
                        <li>
                          <a href="[object Object]"></a>
                        </li>
                      </ul>
                      <Link href={"/blog-details/5"}>
                        <h3>Instagram Reels : The new TikTok</h3>
                      </Link>
                      <Link href={"/blog-details/5"}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="casecard">
                  <div className="single-blog">
                    <div className="blog-img">
                    <Link href={"/blog-details/4"}>
                        <Image
                          quality={90}
                          loading="lazy"
                          src="/images/blog/socialMediaSites.png"
                          alt="blog"
                          className="caseimage"
                          width={500}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <ul>
                        <li>10 July 2020</li>
                        <li>
                          <a href="[object Object]"></a>
                        </li>
                      </ul>
                      <Link href={"/blog-details/4"}>
                        <h3>
                          A BRIEF RUNDOWN OF SOCIAL MEDIA SITES OF ALL TIME
                        </h3>
                      </Link>
                      <Link href={"/blog-details/4"}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="casecard">
                  <div className="single-blog">
                    <div className="blog-img">
                    <Link href={"/blog-details/3"}>
                        <Image
                          quality={90}
                          loading="lazy"
                          src="/images/blog/InfluencerMarketingAutomationImage1.png"
                          alt="blog"
                          className="caseimage"
                          width={500}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <ul>
                        <li>10 June 2020</li>
                        <li>
                          <a href="[object Object]"></a>
                        </li>
                      </ul>
                      <Link href={"/blog-details/3"}>
                        <h3>INFLUENCER MARKETING AUTOMATION</h3>
                      </Link>
                      <Link href={"/blog-details/3"}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="casecard">
                  <div className="single-blog">
                    <div className="blog-img">
                    <Link href={"/blog-details/2"}>
                        <Image
                          quality={90}
                          loading="lazy"
                          src="/images/blog/socialMediaEngagementRatesFall.png"
                          alt="blog"
                          className="caseimage"
                          width={500}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <ul>
                        <li>10 May 2020</li>
                        <li>
                          <a href="[object Object]"></a>
                        </li>
                      </ul>
                      <Link href={"/blog-details/2"}>
                        <h3>Social Media Engagement Rates On The Fall</h3>
                      </Link>
                      <Link href={"/blog-details/2"}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="casecard">
                  <div className="single-blog">
                    <div className="blog-img">
                    <Link href={"/blog-details/1"}>
                        <Image
                          quality={90}
                          loading="lazy"
                          src="/images/blog/INFLUENCERMARKETINGVSAFFILIATEMARKETING.png"
                          alt="blog"
                          className="caseimage"
                          width={500}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <ul>
                        <li>10 April 2020</li>
                        <li>
                          <a href="[object Object]"></a>
                        </li>
                      </ul>
                      <Link href={"/blog-details/1"}>
                        <h3>INFLUENCER MARKETING VS AFFILIATE MARKETING</h3>
                      </Link>
                      <Link href={"/blog-details/1"}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
