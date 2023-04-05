import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar/NavBar'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGame'
import { Genre } from './hooks/useGenre'

export interface GameQuery {
	genre: Genre | null
	platform: Platform | null
}

function App() {
	const [selectQuery, setSelectQuery] = useState<GameQuery>({} as GameQuery)

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
					<GenreList onSelectGenre={genre => setSelectQuery({ ...selectQuery, genre })} />
				</GridItem>
			</Show>
			<GridItem gridArea='main'>
				<PlatformSelector
					selectedPlatform={selectQuery.platform}
					onSelectPlatform={platform => setSelectQuery({ ...selectQuery, platform })}
				/>
				<GameGrid selectQuery={selectQuery} />
			</GridItem>
		</Grid>
	)
}

export default App
