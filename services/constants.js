const productionUrl = "https://eklakshya.com/api/";
const developmentUrl = "http://43.204.29.92:3001/api/";

const mediaUrl = "https://s3.ap-south-1.amazonaws.com/eklakshya.com/";

const isProductionEnvironment = false;

const apiUrl = isProductionEnvironment ? productionUrl : developmentUrl;

export { apiUrl, mediaUrl };