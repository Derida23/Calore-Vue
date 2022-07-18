import axios from 'axios'
import { failed, success } from '~/utils'

const apiLogin = async (params) => {
  try {
    const response = await axios.post('/api/login', params)
    return success(response)
  } catch (err) {
    return failed(err.response)
  }
}

// Master Data --------------------------------------------------------------------->
const apiCategory = async (params, method, context) => {
  if (method === 'get') {
    try {
      const query = Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&')

      const response = await context.$axios.get(`/api/category${'?' + query}`)
      return success(response)
    } catch (err) {
      return failed(err.response)
    }
  }
}
const apiUom = async (params, method, context) => {
  if (method === 'get') {
    try {
      const query = Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&')

      const response = await context.$axios.get(`/api/uom${'?' + query}`)
      return success(response)
    } catch (err) {
      return failed(err.response)
    }
  }
}
const apiVariety = async (params, method, context) => {
  if (method === 'get') {
    try {
      const query = Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&')

      const response = await context.$axios.get(`/api/variety${'?' + query}`)
      return success(response)
    } catch (err) {
      return failed(err.response)
    }
  }
}

// Product ------------------------------------------------------------------------->
const apiProduct = async (params, method, context) => {
  if (method === 'get') {
    try {
      const query = Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&')

      const response = await context.$axios.get(`/api/product${'?' + query}`)
      return success(response)
    } catch (err) {
      return failed(err.response)
    }
  }
}
export { apiLogin, apiCategory, apiProduct, apiUom, apiVariety }
