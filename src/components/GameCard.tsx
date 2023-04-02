import { Card, CardBody, Heading } from '@chakra-ui/react'

interface Game {
	id: number
	name: string
	background_image: string
}

interface GameCardProps {
	game: Game
	children?: React.ReactNode
}

const GameCard = (props: GameCardProps) => {
	const { game } = props
	return (
		<Card overflow={'hidden'}>
			<img src={game.background_image} alt={game.name} />
			<CardBody>
				<Heading fontSize='xl'>{game.name}</Heading>
			</CardBody>
		</Card>
	)
}
export default GameCard
