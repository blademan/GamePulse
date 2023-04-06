import { HStack, Image } from '@chakra-ui/react'
import logo from '../../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchBar from './SearchBar'

interface NavBarProps {
	onSubmit: (value: string) => void
}

const NavBar = ({ onSubmit }: NavBarProps) => {
	return (
		<HStack gap={1} padding={'0.5rem'}>
			<Image src={logo} boxSize={16} />
			<SearchBar onSubmit={onSubmit} />
			<ColorModeSwitch />
		</HStack>
	)
}
export default NavBar
