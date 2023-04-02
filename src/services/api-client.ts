import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'a49398cf95a641e488355c1e32147ff3',
	},
})
