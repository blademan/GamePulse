import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import apiClient from '../services/api-client'

interface Game {
	id: number
	name: string
	background_image: string
}

const GameSchema = z.object({
	id: z.number(),
	name: z.string(),
	background_image: z.string(),
})
const GamesSchema = z.object({
	count: z.number(),
	results: z.array(GameSchema),
})

const useGame = () => {
	// create AbortController to cancel the request
	const controller = new AbortController()
	const { signal } = controller

	const [games, setGames] = useState<Game[]>([])
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		apiClient
			.get('/games', { signal })
			.then(response => {
				const games = GamesSchema.parse(response.data)
				setGames(games.results)
			})
			.catch(error => {
				if (error instanceof CanceledError) setError(error.message)

				return () => {
					controller.abort()
				}
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	return { games, error, loading }
}
export default useGame
