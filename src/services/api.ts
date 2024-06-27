import axios from "axios"
import { BasicData } from "../types"

export const BASE_URL :string = 'https://api.coingecko.com/api/v3/'
export const API_KEY :string = 'CG-u4hop6WZj65C4VD5HFfwqbJW'

const apiClient = axios.create({
    url: BASE_URL,
    headers : {
      'x-cg-demo-api-key' : API_KEY
    }
})



export const getData = async () => {
   const response = await apiClient.get<BasicData[]>('coins/list')
   console.log(response.data)
   return response.data
}