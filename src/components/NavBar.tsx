import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
const NavBar = () => {
	return (
		<HStack>
			<Image src={logo} boxSize={16} />
			<Text fontSize='2xl'>GamePulse</Text>
		</HStack>
	)
}
export default NavBar
