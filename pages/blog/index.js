import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getAllBlogs,
  getAlltabsCategories,
  getAllBlogsBySearch,
} from "../../components/http-service";
import { mediaUrl } from "../../services/constants";

function Blog() {
  const [activeTab, setActiveTab] = useState({ id: "j" });
  const [tabdata, settabdata] = useState(undefined);
  const [categoryData, setcategoryData] = useState([]);
  const [activecategory, setActivecategory] = useState(undefined);
  const [blogList, setblogList] = useState(undefined);
  const [blogSearch, setblogSearch] = useState(undefined);

  const onInputChange = (str) => {
    getBlogsBySearch({ search: str.currentTarget.value });
  };

  useEffect(() => {
    getAlltabsCategories().then((response) => {
      settabdata(response);
      console.log(response);
      setActiveTab({ id: "", title: "default" });
      const validCategories = Object.values(response.tabsWithCategory).flat(2);
      setcategoryData(
        response.categoryList.filter((categoryData) =>
          validCategories.includes(categoryData._id)
        )
      );
      getBlogs({ tab: "default" });
    });
  }, []);

  const onTabClick = (tabInfo) => {
    setActiveTab(tabInfo);
    getBlogs({ tab: tabInfo.title });
    const validCategories =
      tabInfo.title == "default"
        ? Object.values(tabdata.tabsWithCategory).flat(2)
        : tabdata?.tabsWithCategory[tabInfo.title];
    setcategoryData(
      tabdata.categoryList.filter((categoryData) =>
        validCategories.includes(categoryData._id)
      )
    );
  };

  const getBlogs = (filter) => {
    const fileterstring =
      (filter?.search ? "&search=" + filter.search : "") +
      (filter?.tab ? "&tab=" + filter.tab : "") +
      (filter?.category ? "&category=" + filter.category : "");
    getAllBlogs(fileterstring).then((data) => {
      console.log(data, "get blogsssssssssss");
      setblogList(data);
    });
  };

  const getBlogsBySearch = (filter) => {
    const fileterstring =
      (filter?.search ? "&search=" + filter.search : "") +
      (filter?.tab ? "&tab=" + filter.tab : "") +
      (filter?.category ? "&category=" + filter.category : "");
    getAllBlogsBySearch(fileterstring).then((data) => {
      console.log(data, "lists of blog");
      setblogList(data);
    });
  };

  const onCategoryClick = (categoryData) => {
    setActivecategory(categoryData);
    getBlogs({ tab: activeTab.title, category: categoryData._id });
  };

  return (
    <div className="blog_container">
      <div className="tab-container">
        <div className="tab-section">
          <button
            className={
              "tablinks " +
              ("default" == activeTab.title ? "active" : "inactive")
            }
            onClick={() => onTabClick({ id: "", title: "default" })}
          >
            latest posts
          </button>

          {tabdata?.tabList.map((tabData, i) => (
            <button
              key={i}
              className={
                "tablinks " +
                (tabData.title == activeTab.title ? "active" : "inactive")
              }
              onClick={() => onTabClick(tabData)}
            >
              {tabData.title}
            </button>
          ))}
        </div>
        <div className="blog-list-section  row">
          {blogList?.posts.map((blogInfo, i) => (
            <a
              href={"blog/" + blogInfo?.url}
              key={i}
              className="blogData col-md-6 colblog col-lg-4 col-sm-12 col-xs-3"
            >
              <div className="blog-container">
                {blogInfo.bannerId && (
                  <img
                    className="blog_img"
                    // src={
                    //   "https://s3.ap-south-1.amazonaws.com/eklakshya.com/" +
                    //   blogList?.imagesData[blogInfo.bannerId].imageUrl
                    // }
                    src={
                      mediaUrl +
                      blogList?.imagesData[blogInfo.bannerId]?.imageUrl
                    }
                  />
                )}
                <article className="blog-description-container">
                  <h6 className="limit_text">{blogInfo.title} </h6>
                  <p className="limit">{blogInfo.description}</p>
                  <div className="blog-like-view-container row">
                    <div className="col fa fa-thumbs-o-up">
                      {" "}
                      {blogInfo.likes}
                    </div>
                    <div className="col fa fa-eye"> {blogInfo.views}</div>
                  </div>
                </article>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="category_list">
        <span className="tab-tools">
          <input
            className="search ng-pristine ng-valid ng-touched"
            placeholder="Search"
            type="text"
          />
          <i
            onClick={(e) => onInputChange(e)}
            style={{ height: "20px" }}
            className="fa fa-search"
          ></i>
        </span>

        <h4 className="quick_link_head">
          {activeTab.title == "default" ? "Quick Links" : "Categories"}
        </h4>
        <div
          style={{
            display: "flex",
            flexDirection: activeTab.title == "default" ? "row" : "column",
          }}
        >
          {categoryData.map((category, i) => (
            
            <span
              className={
                activeTab.title == "default" ? "quicklinks" : "category"
              }
              key={i}
              onClick={() => onCategoryClick(category)}
            >
              <div className = "category_title">
              {" "}
              {category.title}{" "}
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
