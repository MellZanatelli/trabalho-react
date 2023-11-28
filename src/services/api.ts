import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mell-bd.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api