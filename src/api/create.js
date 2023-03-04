import api from "./axios";

export const upload = async (payload) => {
    try {
        const response = await api.post("/pins/create",
            {
                title: payload.title,
                image: payload.image,
                content: payload.content
            }) 
        alert("업로드 성공");
        return response;
    } catch {
        console.log(payload);
        alert("업로드 실패");
        
    }

};