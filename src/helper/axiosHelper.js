import axios from "axios";

// user api
const rootApi = "http://localhost:8000/api/v1";

const userApi = rootApi + "/user";

export const postUser = (userObj) => {
  try {
    const result = axios.post(userApi, userObj);
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
