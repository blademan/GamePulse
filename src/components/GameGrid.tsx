import { SimpleGrid } from '@chakra-ui/react'
import useGame from '../hooks/useGame'
import GameCard from './GameCard'

const GameGrid = () => {
	const { error, games, loading } = useGame()
	console.log(games)

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error}</div>
	return (
		<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={5} padding={5}>
			{games.map(game => (
				<GameCard key={game.id} game={game} />
			))}
		</SimpleGrid>
	)
}
export default GameGrid
