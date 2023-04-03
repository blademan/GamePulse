import { SimpleGrid } from '@chakra-ui/react'
import useGame from '../hooks/useGame'
import GameCard from './GameCard/GameCard'
import GameCardContainer from './GameCard/GameCardContainer'
import GameCardSkeleton from './GameCard/GameCardSkeleton'

const GameGrid = () => {
	const { error, games, loading } = useGame()
	const skeletonArray = [1, 2, 3, 4, 5, 6]

	if (error) return <div>Error: {error}</div>
	return (
		<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={5} padding={5}>
			{loading &&
				skeletonArray.map((_, index) => (
					<GameCardContainer>
						<GameCardSkeleton key={index} />
					</GameCardContainer>
				))}

			{!loading &&
				games &&
				games.map(game => (
					<GameCardContainer>
						<GameCard key={game.id} game={game} />
					</GameCardContainer>
				))}
		</SimpleGrid>
	)
}
export default GameGrid
