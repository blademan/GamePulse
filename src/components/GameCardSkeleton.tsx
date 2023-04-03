import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
	return (
		<Card width={{ lg: '300px', xl: '400px' }}>
			<Skeleton height={200} />
			<CardBody>
				<SkeletonText mt='4' noOfLines={2} spacing='4' />
			</CardBody>
		</Card>
	)
}
export default GameCardSkeleton
