import axios, { AxiosResponse, AxiosError } from 'axios'

const api = axios.create({
  headers: { 'Content-Type': 'application/json' }
})

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data.error)
    }

    return Promise.reject(error)
  }
)

export { api }
