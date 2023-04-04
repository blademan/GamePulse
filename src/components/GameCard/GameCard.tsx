import { Card, CardBody, HStack, Heading, Text } from '@chakra-ui/react'
import { Game } from '../../hooks/useGame'
import getCroppedImageUrl from '../../services/image-url'
import CriticScore from './CriticScore'
import PlatformIconList from './PlatformIconList'

interface GameCardProps {
	game: Game
	children?: React.ReactNode
}

const GameCard = (props: GameCardProps) => {
	const { game } = props
	return (
		<Card>
			<img src={getCroppedImageUrl(game.background_image)} alt={game.name} />
			<CardBody>
				<Heading fontSize='lg'>{game.name}</Heading>
				<HStack justifyContent={'space-between'}>
					<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	)
}
export default GameCard
