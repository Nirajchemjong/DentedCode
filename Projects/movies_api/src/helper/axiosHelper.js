import axios from "axios";

let api = `https://www.omdbapi.com/?apikey=1a3d22ff&t=`;
export const fetchData = async (str) => {
  try {
    const response = await axios(api + str);

    console.log(response.data);
    return response.data;
  } catch (error) {
    // console.log("error");
    return error.message;
  }
};
