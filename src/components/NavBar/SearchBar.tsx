import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'

interface SearchBarProps {
	onSubmit: (value: string) => void
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
	const ref = useRef<HTMLInputElement>(null)
	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				onSubmit(ref.current?.value ?? '')

				ref.current?.value && (ref.current.value = '')
			}}
		>
			<InputGroup borderRadius={50}>
				<InputLeftElement children={<FaSearch fill='gray' />} />
				<Input ref={ref} variant='filled' placeholder='Search' />
			</InputGroup>
		</form>
	)
}
export default SearchBar
