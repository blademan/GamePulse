import { Grid, GridItem, Show } from '@chakra-ui/react'
import ColorModeSwitch from './components/ColorModeSwitch'
import GameGrid from './components/GameGrid'
import NavBar from './components/NavBar'
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
				<GridItem gridArea='aside'>Aside</GridItem>
			</Show>
			<GridItem h='max' gridArea='main'>
				<GameGrid />
			</GridItem>
		</Grid>
	)
}

export default App
