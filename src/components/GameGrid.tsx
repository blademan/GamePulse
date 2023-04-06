import { SimpleGrid } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGame from '../hooks/useGame'

import GameCard from './GameCard/GameCard'
import GameCardContainer from './GameCard/GameCardContainer'
import GameCardSkeleton from './GameCard/GameCardSkeleton'

interface GameGridProps {
	selectQuery: GameQuery
}

const GameGrid = ({ selectQuery }: GameGridProps) => {
	const { error, data, loading } = useGame(selectQuery)
	const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8]

	if (error) return <div>Error: {error}</div>
	return (
		<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5} padding={5}>
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
