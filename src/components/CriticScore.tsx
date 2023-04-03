import { Badge } from '@chakra-ui/react'

interface CriticScoreProps {
	score: number
}

const CriticScore = ({ score }: CriticScoreProps) => {
	const scoreColor = score > 75 ? 'green' : score > 60 ? 'yellow' : ''
	return (
		<Badge colorScheme={scoreColor} fontSize={14} borderRadius={100} paddingX={2}>
			{score}
		</Badge>
	)
}
export default CriticScore
