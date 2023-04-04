import { Button, Center, HStack, Image, List, ListItem, Spinner, Text, VStack } from '@chakra-ui/react'
import useGenre, { Genre } from '../hooks/useGenre'

interface GenreListProps {
	onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
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
						<Button onClick={() => onSelectGenre(genre)} fontSize={'md'} variant={'link'}>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	)
}
export default GenreList
