import { Center, HStack, Image, List, ListItem, Spinner, Text, VStack } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'

const GenreList = () => {
	const { error, data, loading } = useGenre()

	console.log(data)

	if (loading)
		return (
			<Center height={400}>
				<Spinner />
			</Center>
		)
	if (error) return null

	return (
		<List>
			{data.map(genre => (
				<ListItem key={genre.id} paddingY={2}>
					<HStack>
						<Image boxSize={'32px'} src={genre.image_background} borderRadius={10} />
						<Text fontSize={'lg'}>{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	)
}
export default GenreList
