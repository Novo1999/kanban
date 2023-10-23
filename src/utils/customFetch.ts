import axios from 'axios'

const customFetch = axios.create({
  baseURL: 'https://kanban-api.onrender.com',
})

export default customFetch
