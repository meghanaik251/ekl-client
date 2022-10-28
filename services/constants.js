const productionUrl = "https://eklakshya.com/api/";
const developmentUrl = "http://localhost:3000/api/";


const isProductionEnvironment = false;


const apiUrl = isProductionEnvironment ? productionUrl : developmentUrl;


export { apiUrl }