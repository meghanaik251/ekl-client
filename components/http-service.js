import { apiUrl } from "../services/constants";

let menusData = null;
let widgetsData = null;

const getMenusData = () => {
    return fetch(apiUrl + 'menus?t=' + new Date().getTime())
    .then((data) => {
        return data.json();
    }).then((data) => {
        menusData = data;
    })
}

const getwidgetsData = () => {
    console.log("getwidgetsData")
    return fetch(apiUrl + 'widgets?t=' + new Date().getTime())
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

export { getMenusData,getMenusItem,getWidgetsHomePageSlider, getwidgetsData,getWidgetsWebsiteTags,getWidgetsSocialMediaLinks, getFooterMenus, getWidgetsAbout,getWidgetsLatestNews };