import PageBanner from "@/app/components/Common/PageBanner";
import Footer from "@/app/components/_App/Footer";
import Navbar from "@/app/components/_App/Navbar";
import Link from "next/link";
import BlogSidebar from "@/app/components/BlogDetails/BlogSidebar";
import Head from "next/head";
import Image from "next/image";
import Blogs from "@/public/data/blog";
import ClientOnly from "@/app/client/ClientOnly";

export function generateStaticParams() {
  return ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((blogId) => ({
    blogId,
  }));
}

const BlogDetails = ({ params: { blogId } }) => {
  const { title, content, tags, author, actualImg, date, summary } = Blogs.find(
    (blog) => blog.id.toString() === blogId
  );

  const BlogParaDisplay = (para) => (
    <div className="row">
      {para.para.type == "para" ? (
        <p>
          <span>
            <br />
          </span>
          {para.para.text}
        </p>
      ) : para.para.type == "heading" ? (
        <p>
          <span>
            <br />
          </span>
          <h5>{para.para.text}</h5>
        </p>
      ) : para.para.type == "img" ? (
        <Image
          quality={90}
          width={300}
          height={150}
          loading="lazy"
          src={para.para.src}
          alt="blog"
        />
      ) : (
        <p>
          <span>
            <br />
          </span>
          <h6>{para.para.text}</h6>
        </p>
      )}
    </div>
  );

  const BlogContentDisplay = (contents) => (
    <ClientOnly>
      <div className="row">
        {contents.contents.map((paras) =>
          Object.entries(paras).map((item) => (
            <BlogParaDisplay key={item[0]} para={item[1]} />
          ))
        )}
      </div>
    </ClientOnly>
  );

  const BlogDetailsDisplay = ({
    title,
    content,
    actualImg,
    author,
    date,
    tags,
    summary,
  }) => (
    <div className="blog-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <div className="article-image">
                <Image
                  quality={90}
                  width={300}
                  height={150}
                  loading="lazy"
                  src={actualImg}
                  alt="image"
                />
              </div>

              <div className="article-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <span>Posted On:</span> <a href="#">{date}</a>
                    </li>
                    <li>
                      <span>Posted By:</span> <a href="#">{author}</a>
                    </li>
                  </ul>
                </div>

                <h3>{title}</h3>

                <blockquote className="flaticon-quote">
                  <p>{summary}</p>
                </blockquote>
                <BlogContentDisplay contents={content} />
              </div>

              <div className="post-navigation">
                <div className="navigation-links">
                  <div className="nav-previous">
                    <Link href="/blog" legacyBehavior>
                      <a>
                        <i className="bx bx-left-arrow-alt"></i> Prev Post
                      </a>
                    </Link>
                  </div>

                  <div className="nav-next">
                    <Link href="/blog" legacyBehavior>
                      <a>
                        Next Post <i className="bx bx-right-arrow-alt"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );

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
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
      />
      <BlogDetailsDisplay
        title={title}
        content={content}
        actualImg={actualImg}
        author={author}
        date={date}
        tags={tags}
        summary={summary}
      />
      <Footer />
    </>
  );
};

export default BlogDetails;
