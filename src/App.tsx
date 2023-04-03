import { Grid, GridItem, Show } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar/NavBar'
function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "aside" "main"`,
				md: `"nav" "aside" "main"`, // 768px	48rem
				lg: `"nav nav" "aside main"`, // 992px	62rem
			}}
		>
			<GridItem gridArea='nav'>
				<NavBar />
			</GridItem>
			<Show above='lg'>
				<GridItem gridArea='aside'>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem h='max' gridArea='main'>
				<GameGrid />
			</GridItem>
		</Grid>
	)
}

export default App
