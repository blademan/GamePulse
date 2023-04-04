import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface FetchResponse<T> {
	count: number
	results: T[]
}

const useData = <T>(endpoint: string) => {
	// create AbortController to cancel the request
	const controller = new AbortController()
	const { signal } = controller

	const [data, setData] = useState<T[]>([])
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		apiClient
			.get<FetchResponse<T>>(endpoint, { signal })
			.then(response => {
				setData(response.data.results)
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

	return { data, error, loading }
}
export default useData
