import React, { useContext } from 'react'
import clearSvg from '../../../assets/images/clear.svg'
import styles from './styles.module.scss'
import { SearchContext } from '../../../App'

const Search = () => {
	const { searchValue, setSearchValue } = useContext(SearchContext)

	return (
		<div className={styles.searchWrapper}>
			<input
				className={styles.searchInput}
				onChange={(event) => setSearchValue(event.target.value)}
				value={searchValue}
				type="text"
				placeholder="Поиск пиццы..."
			/>
			{searchValue && (
				<img
					onClick={() => setSearchValue('')}
					className={styles.searchClear}
					src={clearSvg}
					alt="clear"
				/>
			)}
		</div>
	)
}

export default Search
