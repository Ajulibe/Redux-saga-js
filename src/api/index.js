import axios from "axios";
import config from "config";

//--> Fetch Users from api
export const getUsers = async () => {
  let response;
  try {
    const { data } = await axios.get(config.API_BASE_URL);
    response = data;
  } catch (error) {
    response = error;
  }
  return response;
};

//--> Edit Users from api
export const editUsers = async ({ payload }) => {
  const id = payload?.data?.id;
  let response;
  try {
    const { data } = await axios.patch(`${config.API_BASE_URL}/${id}`);
    response = data;
  } catch (error) {
    response = error;
  }
  return response;
};

//--> delete Users from api
export const deleteUsers = async ({ payload }) => {
  const id = payload?.userData?.id;
  let response;
  try {
    const { data } = await axios.delete(`${config.API_BASE_URL}/${id}`);
    response = data;
  } catch (error) {
    response = error;
  }
  return response;
};

//--> delete Users from api
export const createUsers = async () => {
  let response;
  try {
    const { data } = await axios.post(config.API_BASE_URL);
    response = data;
  } catch (error) {
    response = error;
  }
  return response;
};
