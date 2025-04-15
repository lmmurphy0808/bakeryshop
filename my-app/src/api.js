// api.js
import axios from 'axios';

// Define the base URL for your backend API
const API_URL = 'http://localhost:3000/api';  // Assuming your backend is running on port 3000

export const fetchHouses = async () => {
  try {
    const response = await axios.get(`${API_URL}/houses`);
    return response.data;  // Return the list of houses
  } catch (error) {
    console.error("There was an error fetching the houses!", error);
    throw error;
  }
};
