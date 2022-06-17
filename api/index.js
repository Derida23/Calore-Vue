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

export { apiLogin }
