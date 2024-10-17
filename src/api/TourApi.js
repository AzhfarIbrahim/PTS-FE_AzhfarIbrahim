import axios from "axios";

const API_URL = "http://localhost:3000";

export const getAllTours = async () => {
  try {
    const response = await axios.get(`${API_URL}/tour`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Tour:", error);
    throw error;
  }
};

export const addTour = async (tourData) => {
  try {
    const response = await axios.post(`${API_URL}/tour/post`, tourData);
    return response.data;
  } catch (error) {
    console.error("Error adding tour:", error);
    throw error;
  }
};

export const updateTour = async (id, tourData) => {
  try {
    const response = await axios.put(
      `${API_URL}/tour/update?id=${id}`,
      tourData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating tour:", error);
    throw error;
  }
};

export const deleteTour = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/tour/delete?id=${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting tour", error);
    throw error;
  }
};
