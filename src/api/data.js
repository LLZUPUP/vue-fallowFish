import axios from 'axios'
export const HOST = 'https://www.easy-mock.com/mock/5b596a1c2d340a0cf1673504/fallowfish'

export const ERR_OK = 200;

export function getSearchresult() {
  const url = HOST + '/search/results'
  return axios.get(url)
}

export function getCategory() {
  const url = HOST + '/category'
  return axios.get(url)
}