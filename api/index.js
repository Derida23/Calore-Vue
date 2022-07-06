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

const apiCategory = async (params, method) => {
  if (method === 'get') {
    try {
      const query = Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&')

      const response = await axios.get(`/api/category${'?' + query}`)
      return success(response)
    } catch (err) {
      return failed(err.response)
    }
  }
}
export { apiLogin, apiCategory }
