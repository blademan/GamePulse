import useGenre from '../hooks/useGenre'

const GenreList = () => {
	const { error, data, loading } = useGenre()

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error</div>

	return (
		<div>
			{data.map(genre => (
				<div key={genre.id}>{genre.name}</div>
			))}
		</div>
	)
}
export default GenreList
