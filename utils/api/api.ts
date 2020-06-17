import axios, { AxiosResponse, AxiosError } from 'axios'

const api = axios.create({
  headers: { 'Content-Type': 'application/json' }
})

api.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response
  },
  async (error: AxiosError) => {
    return error?.response?.data?.error
      ? Promise.reject(error.response.data.error)
      : Promise.reject(error)
  }
)

export { api }
