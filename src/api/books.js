import axios from 'axios'
import { HOST } from '../common/js/config'

// 书籍列表
export const books = (dataNumber, classes, keyWord) => {
  const url = HOST + `/webphone/bookPhone/findBooksOfPage`
  return axios.post(url, {dataNumber: dataNumber, classes: classes, keyWord: keyWord })
}