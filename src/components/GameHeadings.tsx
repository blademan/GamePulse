import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface GameHeadingsProps {
	selectQuery: GameQuery
}

const GameHeadings = ({ selectQuery }: GameHeadingsProps) => {
	const heading = `${selectQuery.platform?.name || ''} ${selectQuery.genre?.name || ''} Games`

	return (
		<Heading as={'h1'} marginBottom={5}>
			{heading}
		</Heading>
	)
}
export default GameHeadings
