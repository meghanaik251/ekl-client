const productionUrl = "https://eklakshya.com/api/";
const developmentUrl = "http//:13.234.30.250:3000/api/";

const mediaUrl = "https://s3.ap-south-1.amazonaws.com/eklakshya.com/";

const isProductionEnvironment = true;

const apiUrl = isProductionEnvironment ? productionUrl : developmentUrl;

export { apiUrl, mediaUrl };