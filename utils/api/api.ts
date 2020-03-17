import axios, { AxiosResponse, AxiosError } from 'axios'

const api = axios.create({
  headers: { 'Content-Type': 'application/json' }
})

api.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response
  },
  async (error: AxiosError) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data.error)
    }

    return Promise.reject(error)
  }
)

export { api }
