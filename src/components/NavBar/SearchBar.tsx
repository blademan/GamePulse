import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
	return (
		<InputGroup borderRadius={50}>
			<InputLeftElement children={<FaSearch fill='gray' />} />
			<Input variant='filled' placeholder='Search' />
		</InputGroup>
	)
}
export default SearchBar
