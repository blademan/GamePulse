import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { BsGlobe } from 'react-icons/bs'
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { Platform } from '../hooks/useGame'

interface PlatformIconListProps {
	platforms: Platform[]
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
	console.log(platforms)

	const platformSlug: { [key: string]: IconType } = {
		pc: FaWindows,
		ios: FaApple,
		android: FaAndroid,
		mac: FaApple,
		linux: FaLinux,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		apple: MdPhoneIphone,
		google: BsGlobe,
	}

	return (
		<HStack marginY={2}>
			{platforms.map(platform => (
				<Icon as={platformSlug[platform.slug]} key={platform.id} color={'gray.500'} />
			))}
		</HStack>
	)
}
export default PlatformIconList
