import axios from 'axios'
import { HOST } from '../common/js/config'

//  PhoneLogin
export const login = (phone, password) => {
  const url = HOST + `/webphone/bookPhone/login`
  return axios.post(url, {userPhone: phone, password: password })
}
