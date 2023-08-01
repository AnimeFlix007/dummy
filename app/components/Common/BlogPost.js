import Image from "next/image";
const BlogPost = () => {
  return (
    <div className="home-blog-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Blog Posts</span>
          <h2>Our Regular Blogs</h2>
        </div>
        <div
          className="row justify-content-center"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          <div className="col-lg-4 col-md-6">
            <div className="casecard">
              <div className="single-blog">
                <div className="blog-img">
                  <a
                    aria-label="Integrated Marketing Campaigns - Why You Need It And How To Create One"
                    href="/blog-details/9"
                  >
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
                      <a href="#">Pratik Gour</a>
                    </li>
                  </ul>
                  <a
                    aria-label="Integrated Marketing Campaigns - Why You Need It And How To Create One"
                    href="/blog-details/9"
                  >
                    <h3>
                      Integrated Marketing Campaigns - Why You Need It and How
                      To Create One
                    </h3>
                  </a>
                  <p>
                    Integrated Marketing Campaign that is created across
                    multiple channels that work together in a combination to
                    achieve the same set of marketing goals is called an
                    integrated marketing campaign.
                  </p>
                  <a
                    aria-label="Integrated Marketing Campaigns - Why You Need It And How To Create One"
                    className="line-bnt"
                    href="/blog-details/9"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="casecard">
              <div className="single-blog">
                <div className="blog-img">
                  <a
                    aria-label="Reasons Why You Absolutely NEED Influencer Marketing"
                    href="/blog-details/8"
                  >
                    <Image
                      quality={90}
                      loading="lazy"
                      src="/images/blog/influencerMarketing.png"
                      alt="blog"
                      className="caseimage"
                      width={500}
                      height={300}
                    />
                  </a>
                </div>
                <div className="content">
                  <ul>
                    <li>10 March 2021</li>
                    <li>
                      <a href="#">Pratik Gour</a>
                    </li>
                  </ul>
                  <a
                    aria-label="Reasons Why You Absolutely NEED Influencer Marketing"
                    href="/blog-details/8"
                  >
                    <h3>
                      Reasons Why You Absolutely NEED Influencer Marketing
                    </h3>
                  </a>
                  <p>
                    Over the years, influencer marketing - which has become
                    quite the buzzword for modern marketing techniques - has
                    emerged as one of the most important strategies of social
                    media marketing. Although influencer marketing seems to be a
                    relatively new term, the actual case is not so. Influencer
                    marketing has been there since a long time hiding in plain
                    sight.
                  </p>
                  <a
                    aria-label="Reasons Why You Absolutely NEED Influencer Marketing"
                    className="line-bnt"
                    href="/blog-details/8"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="casecard">
              <div className="single-blog">
                <div className="blog-img">
                  <a
                    aria-label="Influencer Marketing After TikTok"
                    href="/blog-details/7"
                  >
                    <Image
                      quality={90}
                      loading="lazy"
                      src="/images/blog/blog2.jpg"
                      alt="blog"
                      className="caseimage"
                      width={500}
                      height={300}
                    />
                  </a>
                </div>
                <div className="content">
                  <ul>
                    <li>10 January 2021</li>
                    <li>
                      <a href="#">Pratik Gour</a>
                    </li>
                  </ul>
                  <a
                    aria-label="Influencer Marketing After TikTok"
                    href="/blog-details/7"
                  >
                    <h3>Influencer Marketing After TikTok</h3>
                  </a>
                  <p>
                    Gravely affected by the ban, TikTok contested the matter in
                    court and the ruling was given in its favour for the reason
                    that it tracked down and removed content that would
                    classNameify as inappropriate. This resulted in the lifting
                    of the ban on the app.
                  </p>
                  <a
                    className="line-bnt"
                    aria-label="Influencer Marketing After TikTok"
                    href="/blog-details/7"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-btn text-center">
          <p>
            We have more useful blog posts for you.{" "}
            <a href="/blog/">View More</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
