import axios from "axios"

export const apiCall = async () => {
  const response = await axios.get('http://localhost:8080');
  return response.data;
}
