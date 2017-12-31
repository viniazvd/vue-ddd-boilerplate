import axios from 'axios'
import { api } from '@/support/enviroment/baseUrl'

export const http = axios.create({
  baseURL: api
})
