import { instance, instance2 } from "../axios";

export const getPinList = async () => {
  try {
    console.log("asdfasdfasdf");
    const response = await instance.get("/pins");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
