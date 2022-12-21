import { useEffect, useState } from "react";
import { Classnames } from "react-alice-carousel";
import Link from "next/link";
import { claps, getBlogData } from "../../components/http-service";
import { mediaUrl } from "../../services/constants";

const app = () => {
  const [blogData, setblogData] = useState(undefined);

  function increment() {
    // console.log("Hello..");
  }

  useEffect(() => {
    getBlogData().then((blogData) => {
      setblogData(blogData);
    });
  }, []);

const clicked_like = () => {
  claps(blogData.post._id).then((likes) => {
    // console.log(likes)
    const blogData1 = {...blogData}
    blogData1.post.likes = blogData1.post.likes + 1;
    setblogData(blogData1)
  })
}

  return (
    <>
      <div className="blog-container">
        <div className="blog-banner-container">
          <img
            src={
              mediaUrl + blogData?.imagesData[blogData?.post.bannerId].imageUrl
            }
            alt=""
          />
        </div>
        <div className="blog-details-container">
          <div className="row">
            <div className="col-9">
              <div className="author_details_container">
                <img
                  className="author_profile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU"
                />
                <b className = "by_author">
                  {blogData?.post?.showAuthorName
                    ? blogData?.post?.authorName
                    : "eklakhya"}
                </b>
                <p className="fa fa-heart top-icons icons-font-color" onClick={clicked_like}>
                  {" "}
                  &nbsp; {blogData?.post?.likes}
                </p>
                <p className="fa fa-eye top-icons icons-font-color">
                  {" "}
                  &nbsp; {blogData?.post?.views}
                </p>
                <Link
                  href={
                    "https://www.facebook.com/dialog/share?app_id=715740538932855&display=popup&href=https://eklakshya.com/blog/goal-setting-the-4-secrets-of-world-class-achievers"
                  }
                >
                  <p className="fa fa-facebook"></p>
                </Link>
                <Link
                  href={
                    "https://twitter.com/intent/tweet?url=https://eklakshya.com/blog/goal-setting-the-4-secrets-of-world-class-achievers"
                  }
                >
                  <p className="fa fa-twitter"></p>
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Feklakshya.com%2Fblog%2Fgoal-setting-the-4-secrets-of-world-class-achievers"
                  }
                >
                  <p className="fa fa-linkedin"></p>
                </Link>
                <span
                  className="fa fa-copy"
                  onClick={() => {
                    navigator.clipboard.writeText(location.href);
                  }}
                ></span>
              </div>
              <span className="author_blog_detail">
                {blogData?.post?.content[0].body.map((bodyData) => (
                  <p dangerouslySetInnerHTML={{ __html: bodyData.data }}></p>
                ))}
              </span>
            </div>

            <div className="related_posts col">
              <h4 className="related_posts_text">Related Posts</h4>
              {blogData?.relatedPosts.map((blogRelatedData, i) => (
                <a key={i} href={blogRelatedData.url}>
                  <h6 className="related_blog_head">
                    {blogRelatedData.description}
                    <br />
                    <p
                      className="related_likes fa fa-thumbs-o-up"
                      onClick={increment}
                    >
                      {" "}
                      &nbsp; {blogRelatedData?.likes} &nbsp;{" "}
                    </p>
                    <p className="fa fa-eye">
                      {" "}
                      &nbsp; {blogRelatedData?.views} &nbsp;{" "}
                    </p>
                  </h6>
                </a>
              ))}
            </div>
          </div>

          {/* <button className = "view_all_posts" onClick = {window.history.back() } > VIEW ALL POSTS</button> */}
          <div className="linkDiv">
            <Link className="view_all_posts view" id="link" href={"/blog"}>
              VIEW ALL POSTS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default app;