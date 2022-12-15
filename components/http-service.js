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

const getSubmitedformddata = (formdetails) => {
  return fetch(apiUrl + "application" + "?t=" + new Date().getTime(), {
    method: "POST",
    body: JSON.stringify(formdetails),
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
};

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

const Privacypolicy = () => {
  return fetch(apiUrl + "pages/privacy-policy" + "?t=" + new Date().getTime(), {
    method: "GET",
    body: JSON.stringify(),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
          return data;
    });    
};

const termsandconditions = () => {
  return fetch(apiUrl + "pages/terms-and-conditions" + "?t=" + new Date().getTime(), {
    method: "GET",
    body: JSON.stringify(),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
          return data;
    });    
};

const cancellationandrefund = () => {
  return fetch(apiUrl + "pages/cancellation-and-refund" + "?t=" + new Date().getTime(), {
    method: "GET",
    body: JSON.stringify(),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
          return data;
    });    
};


const submitDoc =(formData,next)=>{
  console.log(formData,"api testimnng ")
  return fetch(apiUrl + "application/files" + "?t=" + new Date().getTime(), {
    method: "POST",
    body: formData ,
    
  })
    .then((data) => {
      return data.json(formData);
    })
    .then((data) => {
      next(data[0].location);
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




function getAlltabsCategories() {
  return fetch(
    apiUrl + "posts/keyWords/?" + "t=" + new Date().getTime()+"&type=category"
  ).then((response) => response.json());
}

function getAllBlogs(filter) {
  return fetch(
    apiUrl + "posts/?t=" + new Date().getTime() + filter
  ).then((response) => response.json());
}

function getAllBlogsBySearch(filter) {
  return fetch(
    apiUrl + "posts/search/?t=" + new Date().getTime() + filter
  ).then((response) => response.json());
}

function getBlogData() {
  const blogUrl = location.pathname.split("/").at(-1)
  // console.log(blogUrl)
  return fetch(
    apiUrl + blogUrl + "?t=" + new Date().getTime()
  ).then((response) => {
    return response.json()
  }).then((resp) => {
    return resp
  });
}

const claps = (id) => {
  return fetch(apiUrl + "posts/claps" + "?t=" + new Date().getTime(), {
    method: "PUT",
    body: JSON.stringify({id}),
    headers : {
      'Content-Type': 'application/json'
    },
  })
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
  Privacypolicy,
  submitDoc,
  termsandconditions,
  cancellationandrefund,
  claps,  
};
