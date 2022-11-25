import { apiUrl } from "../services/constants";

let menusData = null;
let widgetsData = null;
let trainingData = null;
let trainingInfo = null;
let formData = null;
let submitedformddata = null;

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
  return  fetch(apiUrl + "widgets?t=" + new Date().getTime())
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      widgetsData = data;
      return data;
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
      return data;
    });
};

const getTraininginfo = (url) => {
  return fetch(apiUrl + "training/" + url + "?t=" + new Date().getTime())
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      trainingInfo = data;
      return data;
    });
};

const getFormdata = (url) => {
  return fetch(
    apiUrl + "application-form/" + url + "?t=" + new Date().getTime()
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      formData = data;
      console.log(formData, "hhhhhhhhhhhhhhhh");
      return data;
    });
};

const getSubmitedformddata = (formdata) => {
  return fetch(apiUrl + "application" + "?t=" + new Date().getTime(), {
    method: "POST",
    body: JSON.stringify(formdata, formId),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      submitedformddata = data;
      console.log(submitedformddata, "hhhhhhhhhhhhhhhh");
      return data;
    });
};

// const getTrainingsList = () => {
//   return trainingData?.trainingList.map((training, i) => {
//     return {
//       thumbnail: trainingData?.imagesData[training?.thumbnail]?.imageUrl,
//       title: training.title,
//       url: training.url,
//       description: training.description,
//       banner: training.banner,
//     };
//   });
// };

const submitContactFormdata =(formdata)=>{
  return fetch(apiUrl + "contact" + "?t=" + new Date().getTime(), {
    method: "POST",
    body: JSON.stringify(formdata),
    headers : {
      'Content-Type': 'application/json'
    },
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      submitedformddata = data;
      console.log(submitedformddata, "hhhhhhhhhhhhhhhh");
      return data;
    });
}

const getMenusItem = () => {
  return menusData.find((d) => d.title == "Navbar main" );
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

const getWidgetHomePagestestimonials = () => {
  return widgetsData?.find((d) => d.type == "testimonials");
};

const getTrainingsList = () => {
  return trainingData?.trainingList.map((training, i) => {
    return {
      thumbnail: trainingData?.imagesData[training?.thumbnail]?.imageUrl,
      title: training.title,
      url: training.url,
      description: training.description,
      banner: training.banner,
    };
  });
};


function getAlltabsCategories() {
  return fetch(
    "https://www.eklakshya.com/api/posts/keyWords/?t=1667971013761&type=category"
  ).then((response) => response.json());
}

function getAllBlogs(filter) {
  return fetch(
    "https://www.eklakshya.com/api/posts/?t=1667979981893" + filter
  ).then((response) => response.json());
}

function getAllBlogsBySearch(filter) {
  return fetch(
    "https://www.eklakshya.com/api/posts/search/?t=1667979981893" + filter
  ).then((response) => response.json());
}

function getBlogData() {
  const blogUrl = location.pathname.split("/").at(-1)
  // console.log(blogUrl)
  return fetch(
    "https://eklakshya.com/api/posts/" + blogUrl + "?t=" + new Date().getTime()
  ).then((response) => {
    return response.json()
  }).then((resp) => {
    return resp
  });
}



export {
  getMenusData,
  getMenusItem,
  getWidgetsHomePageSlider,
  getwidgetsData,
  getWidgetsWebsiteTags,
  getWidgetsSocialMediaLinks,
  getFooterMenus,
  getWidgetsAbout,
  getWidgetsLatestNews,
  getAlltabsCategories,
  getAllBlogs,
  getAllBlogsBySearch,
  getTrainingsList,
  getFormdata,
  getTraininginfo,
  getSubmitedformddata,
  getTrainingData,
  getWidgetHomePagestestimonials,
  submitContactFormdata,
  getBlogData,
};
