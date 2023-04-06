import { HStack, Image } from '@chakra-ui/react'
import logo from '../../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchBar from './SearchBar'
const NavBar = () => {
	return (
		<HStack gap={1} padding={'0.5rem'}>
			<Image src={logo} boxSize={16} />
			<SearchBar />
			<ColorModeSwitch />
		</HStack>
	)
}
export default NavBar
