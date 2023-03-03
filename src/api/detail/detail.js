import { instance } from "../axios";

export const getPinDetail = async (payload) => {
  try {
    const response = await instance.get(`/pins/${payload}`);
    console.log(response);
    return response;
  } catch (error) {}
};
