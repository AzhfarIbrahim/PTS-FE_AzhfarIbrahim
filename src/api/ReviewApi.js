import axios from "axios";

const API_URL = "http://localhost:3000";

export const getAllReview = async () => {
  try {
    const response = await axios.get(`${API_URL}/review`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching review:", error);
    throw error;
  }
};

export const addReview = async (reviewData) => {
  try {
    const response = await axios.post(`${API_URL}/review/post`, reviewData);
    return response.data;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};

export const updateReview = async (id, reviewData) => {
  try {
    const response = await axios.put(
      `${API_URL}/review/update?id=${id}`,
      reviewData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating review:", error);
    throw error;
  }
};

export const deleteReview = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/review/delete?id=${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting review", error);
    throw error;
  }
};
