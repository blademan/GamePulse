import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'

const GenreList = () => {
	const { error, data, loading } = useGenre()

	console.log(data)

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error</div>

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
