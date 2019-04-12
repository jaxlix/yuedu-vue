import axios from 'axios'
import { HOST } from '../common/js/config'

// 书架列表
export const bookshelf = (userInfoId, dataNumber) => {
  const url = HOST + '/webphone/bookPhone/findBookshelfOfPage'
  return axios.post(url, {userInfoId: userInfoId, dataNumber: dataNumber })
}