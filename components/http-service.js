import { apiUrl } from "../services/constants";

let menusData = null;
let widgetsData = null;
let trainingData = null;
let trainingInfo = null;

const getMenusData = () => {
  return fetch(apiUrl + "menus?t=" + new Date().getTime())
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      menusData = data;
    });
};

const getwidgetsData = () => {
  console.log("getwidgetsData");
  return fetch(apiUrl + "widgets?t=" + new Date().getTime())
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      widgetsData = data;
      return data ;
    });
};

const getTrainingData = () => {
  console.log("gettrainingData");
  return fetch(apiUrl + "training?t=" + new Date().getTime())
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      trainingData = data;
      return data ;
    });
};

const getTraininginfo =(url) =>{
  return fetch(apiUrl + "training/"+ url + '?t=' + new Date().getTime())
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    trainingInfo = data;
    return data;
  });
 
};

const getMenusItem = () => {
  return menusData.find((d) => d.title == "Navbar main");
};

const getFooterMenus = () => {
  return menusData.find((d) => d.title == "footer-bottom");
};

const getWidgetsAbout = () => {
  return widgetsData.find((d) => d.title == "About");
};

const getWidgetsLatestNews = () => {
  return widgetsData.find((d) => d.title == "Latest News");
};

const getWidgetsWebsiteTags = () => {
  return widgetsData.find((d) => d.title == "Website Tags");
};

const getWidgetsHomePageSlider = () => {
  return widgetsData.find((d) => d.title == "Home page slider");
};

const getWidgetsSocialMediaLinks = () => {
  return widgetsData.find((d) => d.title == "Social media links");
};

const getTrainingsList = () => {
    return trainingData?.trainingList.map((training)=>{ return { thumbnail : trainingData?.imagesData[training?.thumbnail]?.imageUrl , title : training.title, url : training.url, description : training.description, banner:training.banner  } })
  };
// const getTrainingdetails =()=>{
//   return trainingInfo.find((d) => d.title == "Abdul Kalam Susandhi Fellowship Program");
// };

export {
  getMenusData,
  getMenusItem,
  getTrainingData,
  getWidgetsHomePageSlider,
  getwidgetsData,
  getWidgetsWebsiteTags,
  getWidgetsSocialMediaLinks,
  getFooterMenus,
  getWidgetsAbout,
  getWidgetsLatestNews,
  getTrainingsList,
  // getTrainingdetails,
  getTraininginfo
};
