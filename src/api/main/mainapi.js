import { instance } from "../axios";

export const getPinList = async () => {
  try {
    console.log(process.env.REACT_APP_SERVER_URL);
    const response = await instance.get("/pins");
    console.log(response);
    return response;
  } catch (error) {}
};
