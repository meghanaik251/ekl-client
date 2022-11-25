import { useEffect, useState } from "react";
import { Classnames } from "react-alice-carousel";
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
                            <p className = "fa fa-copy"></p>
                        </div>
                          <span className = "author_blog_detail">{blogData?.post?.content[0].body.map((bodyData) => (
                                <p dangerouslySetInnerHTML={{__html : bodyData.data}}></p>
                            ))}</span>
                    </div>

                    <div className="col-3">
                        <h4>Related Posts</h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default app;