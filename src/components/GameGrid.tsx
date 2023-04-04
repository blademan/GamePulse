import { SimpleGrid } from '@chakra-ui/react'
import useGame from '../hooks/useGame'
import { Genre } from '../hooks/useGenre'
import GameCard from './GameCard/GameCard'
import GameCardContainer from './GameCard/GameCardContainer'
import GameCardSkeleton from './GameCard/GameCardSkeleton'

interface GameGridProps {
	selectedGenre: Genre | null
}

const GameGrid = ({ selectedGenre }: GameGridProps) => {
	const { error, data, loading } = useGame(selectedGenre)
	const skeletonArray = [1, 2, 3, 4, 5, 6]

	if (error) return <div>Error: {error}</div>
	return (
		<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} padding={5}>
			{loading &&
				skeletonArray.map((_, index) => (
					<GameCardContainer key={index}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}

			{!loading &&
				data &&
				data.map(game => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
		</SimpleGrid>
	)
}
export default GameGrid
