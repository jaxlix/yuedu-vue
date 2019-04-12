import axios from 'axios'
import { HOST } from '../common/js/config'

// 书籍列表
export const login = (classes, dataNumber, keyWord) => {
  const url = HOST + `/webphone/bookPhone/findBooksOfPage`
  return axios.post(url, {classes: classes, dataNumber: dataNumber, keyWord: keyWord })
}