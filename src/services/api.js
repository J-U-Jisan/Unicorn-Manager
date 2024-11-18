import axios from 'axios'


const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_API_UNIQUE_ID,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Export the Axios instance
export default apiClient;
