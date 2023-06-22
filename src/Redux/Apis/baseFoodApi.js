import axios from "axios";

const API_ID = "fbb0b33c";
const API_KEY = "b3d1a1eaeb0712ccae911c0cb24f09e7";

export default axios.create({
  baseURL: `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=food&app_id=${API_ID}&app_key=${API_KEY}`,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

// curl -X GET --header "Accept: application/json" --header "Accept-Language: en",
