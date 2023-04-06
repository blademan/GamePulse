import { Button, Center, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import useGenre, { Genre } from '../hooks/useGenre'

interface GenreListProps {
	onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
	const { error, data, loading } = useGenre()

	const [activeButton, setActiveButton] = useState<number | null>(null)

	const handleActiveButton = (genre: Genre) => {
		setActiveButton(genre.id)
		onSelectGenre(genre)
	}

	if (loading)
		return (
			<Center height={400}>
				<Spinner />
			</Center>
		)
	if (error) return null

	return (
		<>
			<Heading as={'h2'} size={'md'} paddingY={2}>
				Genres
			</Heading>
			<List>
				{data.map(genre => (
					<ListItem key={genre.id} paddingY={2}>
						<HStack>
							<Image objectFit={'cover'} boxSize={'32px'} src={genre.image_background} borderRadius={10} />
							<Button
								textAlign={'left'}
								whiteSpace={'normal'}
								fontWeight={activeButton === genre.id ? 'bold' : 'normal'}
								onClick={() => handleActiveButton(genre)}
								fontSize={'md'}
								variant={'link'}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	)
}
export default GenreList
