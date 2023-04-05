import useData from './useData'

// export interface Genre {
// 	id: number
// 	name: string
// 	image_background: string
// }

const useSort = () => useData('/genres')
export default useSort
