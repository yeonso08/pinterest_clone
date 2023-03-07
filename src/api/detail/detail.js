import api from "../axios";

// export const getPinDetail = async (payload) => {
//   try {
//     const response = await instance.get(`/pins/${payload}`);
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getPinDetailComment = async (payload) => {
  try {
    const response = await api.get(`pins/${payload}/comments`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getPinDetail = async (id) => {
  try {
    const response = await api.get('/pins/',  {
    })
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const switchDetail = async (payload) => {
  try {
    const response = await api.patch(`/pins/${payload.id}`, {
      title: payload.title,
      content: payload.content,
    });
      console.log(response)
      return response
  } catch(error) {
      console.log(error)
    }
  }

  export const removeDetail = async(id) => {
    try {
      await api.delete(`/pins/${id}`);
    }
    catch(error) {
      console.log(error)
    }
  }