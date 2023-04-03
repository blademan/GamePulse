import axios from 'axios'
const api = import.meta.env.VITE_API_KEY
console.log(api)

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: api,
	},
})
