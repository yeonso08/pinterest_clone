import api from "./axios";

// 회원가입
export const signUp = async (newUser) => {
  try {
    console.log(newUser);
    const response = await api.post("/users/signup", newUser);
    // console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
    alert("회원가입 실패");
  }
};

// 로그인
export const logIn = async (userInfo) => {
  try {
    const response = await api.post(
      "/users/login",
      userInfo,

      { withCredentials: true }
    );

    console.log("api : ", response.headers.authorization);
    const token = response.headers.authorization;
    const tokenN = token.split(" ")[1];
    console.log(tokenN);

    // 로컬 스토리지에 access_token과 refresh_token 저장
    localStorage.setItem("access_token", tokenN);
    // localStorage.setItem("refresh_token", response.data.refresh_token);
    // axios
    //axios 인스턴스의 default header에 access_token 설정
    // api.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${response.data.access_token}`;
    return response;
  } catch (error) {
    console.log(error.response.data);
    alert("로그인 실패");
    return "이메일 혹은 비밀번호를 확인하세요.";
  }
};
