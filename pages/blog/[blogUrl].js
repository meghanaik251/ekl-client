import { useEffect, useState } from "react";
import { Classnames } from "react-alice-carousel";
import Link from "next/link";
import { getBlogData } from "../../components/http-service";
import { mediaUrl } from "../../services/constants";


const app = () => {
    
    const [blogData, setblogData] = useState(undefined);

    useEffect( ()=>{
        getBlogData().then((blogData)=>{
            setblogData(blogData);
        })
    },[])


    return (
        <>
        <div className="blog-container">
            <div className="blog-banner-container">
                <img src={ mediaUrl + blogData?.imagesData[blogData?.post.bannerId].imageUrl} alt="" />
            </div>
            <div className="blog-details-container">
                <div className="row">
                    <div className="col-9">
                        <div className="author_details_container">
                            <img className = "author_profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU" />
                            <b>{blogData?.post?.showAuthorName ? blogData?.post?.authorName : "eklakhya"}</b>
                            <p className = "fa fa-heart top-icons icons-font-color"> &nbsp; {blogData?.post?.likes}</p>
                            <p className = "fa fa-eye top-icons icons-font-color"> &nbsp; {blogData?.post?.views}</p>
                            <p className = "fa fa-facebook"></p>
                            <p className = "fa fa-twitter"></p>
                            <p className = "fa fa-linkedin"></p>
                            <span className = "fa fa-copy"></span>
                        </div>
                          <span className = "author_blog_detail">{blogData?.post?.content[0].body.map((bodyData) => (
                                <p dangerouslySetInnerHTML={{__html : bodyData.data}}></p>
                            ))}</span>
                    </div>

                    <div className="related_posts col-3">
                        <h4 className = "related_posts_text">Related Posts</h4>
                        {blogData?.relatedPosts.map((blogRelatedData, i) => (
                            <h6 className="related_blog_head">{blogRelatedData?.description} 
                            <br />
                                <p className="related_likes fa fa-thumbs-o-up" > &nbsp; { blogRelatedData?.likes} &nbsp; </p>
                                <p className="fa fa-eye"> &nbsp; {blogRelatedData?.views} &nbsp; </p>
                            </h6>
                        ))}
                    </div>
                </div>

               
                {/* <button className = "view_all_posts" onClick = {window.history.back() } > VIEW ALL POSTS</button> */}
               <div className="linkDiv">
                <Link className="view_all_posts view" id="link" href={"/blog"}>VIEW ALL POSTS</Link>
                </div>
            </div>
        </div>
        </>
    )
};
export default app;