import { SimpleGrid } from '@chakra-ui/react'
import useGame from '../hooks/useGame'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {
	const { error, games, loading } = useGame()
	const skeletonArray = [1, 2, 3, 4, 5, 6]

	if (error) return <div>Error: {error}</div>
	return (
		<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={5} padding={5}>
			{loading && skeletonArray.map((_, index) => <GameCardSkeleton key={index} />)}

			{!loading && games && games.map(game => <GameCard key={game.id} game={game} />)}
		</SimpleGrid>
	)
}
export default GameGrid
