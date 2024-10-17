import axios from "axios";

const API_URL = "http://localhost:3000";

export const getAllTourists = async () => {
  try {
    const response = await axios.get(`${API_URL}/tourist`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Tourists:", error);
    throw error;
  }
};

export const addTourist = async (touristData) => {
  try {
    const response = await axios.post(`${API_URL}/tourist/post`, touristData);
    return response.data;
  } catch (error) {
    console.error("Error adding tourist:", error);
    throw error;
  }
};

export const updateTourist = async (id, touristData) => {
  try {
    const response = await axios.put(
      `${API_URL}/tourist/update?id=${id}`,
      touristData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating tourist:", error);
    throw error;
  }
};

export const deleteTourist = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/tourist/delete?id=${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting tourist", error);
    throw error;
  }
};
