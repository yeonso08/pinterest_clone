import { instance } from "../axios";

export const getPinList = async () => {
  try {
    const response = await instance.get("/pins");
    console.log(response);
    return response;
  } catch (error) {}
};
