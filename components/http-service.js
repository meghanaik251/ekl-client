let menusData = null;
let widgetsData = null;

const getMenusData = () => {
    return fetch('https://eklakshya.com/api/menus?t=' + new Date().getTime())
    .then((data) => {
        return data.json();
    }).then((data) => {
        menusData = data;
    })
}

const getwidgetsData = () => {
    console.log("getwidgetsData")
    return fetch('https://eklakshya.com/api/widgets?t=' + new Date().getTime())
    .then((data) => {
        return data.json();
        
    }).then((data) => {
        widgetsData = data;
                return data;
    })
}

const getMenusItem =()=> {
    return menusData.find(d => d.title == "Navbar main");
}

const getFooterMenus = () => {
    return menusData.find(d => d.title == 'footer-bottom');
}

const getWidgetsAbout = () => {
    return widgetsData.find(d => d.title == "About");
}

const getWidgetsLatestNews = () => {
    return widgetsData.find(d => d.title == "Latest News");
}

const getWidgetsWebsiteTags = () => {
    return widgetsData.find(d => d.title == "Website Tags");
}

const getWidgetsHomePageSlider=() =>{
    return widgetsData.find(d => d.title == "Home page slider");

}

const getWidgetsSocialMediaLinks = () => {
    return widgetsData.find(d => d.title == "Social media links");
}

function getAlltabsCategories()
{
    return fetch("https://www.eklakshya.com/api/posts/keyWords/?t=1667971013761&type=category")
    .then( (response) => response.json() )
}

function getAllBlogs(filter)
{
    return fetch("https://www.eklakshya.com/api/posts/?t=1667979981893" + filter)
    .then( (response) => response.json() )
}

function getAllBlogsBySearch(filter)
{
    return fetch("https://www.eklakshya.com/api/posts/search/?t=1667979981893" + filter)
    .then( (response) => response.json() )
}


export { getMenusData,getMenusItem,getWidgetsHomePageSlider, getwidgetsData,getWidgetsWebsiteTags,getWidgetsSocialMediaLinks, getFooterMenus, getWidgetsAbout,getWidgetsLatestNews, getAlltabsCategories, getAllBlogs, getAllBlogsBySearch };