import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import apiClient from '../services/api-client'

export interface Genre {
	id: number
	name: string
}

const GenreSchema = z.object({
	id: z.number(),
	name: z.string(),
})
const GamesSchema = z.object({
	count: z.number(),
	results: z.array(GenreSchema),
})

const useGenre = () => {
	// create AbortController to cancel the request
	const controller = new AbortController()
	const { signal } = controller

	const [genres, setGenres] = useState<Genre[]>([])
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		apiClient
			.get('/genres', { signal })
			.then(response => {
				const genre = GamesSchema.parse(response.data)
				setGenres(genre.results)
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

	return { genres, error, loading }
}
export default useGenre
