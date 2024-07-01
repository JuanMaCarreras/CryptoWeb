import axios from 'axios'
import DataConi from '../types/getData.type'

const BASE_URL = 'https://api.coingecko.com/api/v3'
const API_KEY = 'CG-u4hop6WZj65C4VD5HFfwqbJW'


const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    'x-cg-demo-api-key' : API_KEY
  }
})

export const getData = async () => {
    const response = await api.get<DataConi[]>('/coins/list')
    return response.data
}
