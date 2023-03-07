import { instance, instance2 } from "../axios";

export const getPinList = async () => {
  try {
    const response = await instance.get("/pins");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
