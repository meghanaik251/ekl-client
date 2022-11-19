const productionUrl = "https://eklakshya.com/api/";
const developmentUrl = "http://localhost:3000/api/";

const mediaUrl = "https://s3.ap-south-1.amazonaws.com/eklakshya.com/";

const isProductionEnvironment = !false;

const apiUrl = isProductionEnvironment ? productionUrl : developmentUrl;

export { apiUrl, mediaUrl };
