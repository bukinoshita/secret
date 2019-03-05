// Packages
import axios from 'axios'

const API_URL = process.env.apiUrl
const ACCESS_TOKEN = process.env.accessToken

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    Authorization: ACCESS_TOKEN
  }
})

api.interceptors.request.use(cfg => cfg)

api.interceptors.response.use(
  response => {
    if (response.data) {
      return response.data
    }

    return response
  },
  error => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data.error)
    }

    return Promise.reject(error)
  }
)

export default api
