import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar/NavBar'
import { Genre } from './hooks/useGenre'
function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

	return (
		<Grid
			templateAreas={{
				base: `"nav" "aside" "main"`,
				lg: `"nav nav" "aside main"`, // 992px	62rem
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}
		>
			<GridItem gridArea='nav'>
				<NavBar />
			</GridItem>
			<Show above='lg'>
				<GridItem gridArea='aside' paddingX={5}>
					<GenreList onSelectGenre={genre => setSelectedGenre(genre)} />
				</GridItem>
			</Show>
			<GridItem h='max' gridArea='main'>
				<GameGrid selectedGenre={selectedGenre} />
			</GridItem>
		</Grid>
	)
}

export default App
