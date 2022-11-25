import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getAllBlogs,
  getAlltabsCategories,
  getAllBlogsBySearch,
} from "../../components/http-service";



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
      console.log(data);
      setblogList(data);
    });
  };

  const getBlogsBySearch = (filter) => {
    const fileterstring =
      (filter?.search ? "&search=" + filter.search : "") +
      (filter?.tab ? "&tab=" + filter.tab : "") +
      (filter?.category ? "&category=" + filter.category : "");
    getAllBlogsBySearch(fileterstring).then((data) => {
      console.log(data);
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
        <input onChange={(e) => onInputChange(e)} /> <button>butn</button>
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
            <Link
              href={"blog/" + blogInfo?.url}
              key={i}
              className="blogData col-md-4 col-sm-6 col-xs-12"
            >
              <div className="blog-container blogData col-md-4 col-sm-6 col-xs-12">
                <img
                  className="blog_img"
                  src={
                    "https://s3.ap-south-1.amazonaws.com/eklakshya.com/" +
                    blogList?.imagesData[blogInfo.bannerId].imageUrl
                  }
                />
                <article className="blog-description-container">
                <h6 >{blogInfo.title}</h6>
                <p>{blogInfo.description.slice(0,80)}</p>
                <div className="blog-like-view-container row">
                  <div className="col fa fa-thumbs-o-up">  { blogInfo.likes}</div>
                  <div className="col fa fa-eye"> {blogInfo.views}</div>
                </div>
                </article>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="category_list">
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
              {" "}
              {category.title}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;