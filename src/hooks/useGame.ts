import { GameQuery } from '../App'
import useData from './useData'

export interface Platform {
	id: number
	name: string
	slug: string
}
export interface Game {
	id: number
	name: string
	background_image: string
	metacritic: number
	parent_platforms: {
		platform: Platform
	}[]
}

const useGame = (selectQuery: GameQuery) =>
	useData<Game>('/games', { params: { genres: selectQuery.genre?.id, platforms: selectQuery.platform?.id } }, [
		selectQuery,
	])
export default useGame
