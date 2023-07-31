import Link from "next/link";

const BlogSidebar = () => {
  return (
    <div className="widget-area" id="secondary">
      <div className="widget widget_tag_cloud">
        <h3 className="widget-title">Tags</h3>
        <div className="post-wrap">
          <div className="tagcloud">
            <Link href="/blog" legacyBehavior>
              <a>Business</a>
            </Link>

            <Link href="/blog" legacyBehavior>
              <a>Privacy</a>
            </Link>

            <Link href="/blog" legacyBehavior>
              <a>Technology</a>
            </Link>

            <Link href="/blog" legacyBehavior>
              <a>Tips</a>
            </Link>

            <Link href="/blog" legacyBehavior>
              <a>Uncategorized</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
