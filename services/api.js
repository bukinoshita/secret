'use strict'

import axios from 'axios'

const apiUrl = process.env.API
const accessToken = process.env.ACCESS_TOKEN

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: 'application/json'
  }
})

api.interceptors.request.use(config => {
  config.headers.authorization = accessToken

  return config
})

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
