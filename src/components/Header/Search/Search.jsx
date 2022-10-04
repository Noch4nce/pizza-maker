import React from 'react'
import styles from './styles.module.scss'

const Search = ({ searchValue, onChangeSearchValue }) => {
	return (
		<input
			className={styles.searchInput}
			onChange={(event) => onChangeSearchValue(event.target.value)}
			value={searchValue}
			type="text"
			placeholder="Поиск пиццы..."
		/>
	)
}

export default Search
