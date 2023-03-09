import { instance, instance2 } from "../axios";

export const getPinList = async () => {
  try {
    const response = await instance.get("/pins", {
      params: { page: 0, size: 4 },
    });
    return response.data;
  } catch (error) {}
};

export const postPinSave = async (payload) => {
  const response = await instance.post(`/mypage/save/${payload.id}`);
  return response;
};
