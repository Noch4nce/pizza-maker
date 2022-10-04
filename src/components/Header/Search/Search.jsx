import React from 'react'
import clearSvg from '../../../assets/images/clear.svg'
import styles from './styles.module.scss'

const Search = ({ searchValue, onChangeSearchValue }) => {
	return (
		<div className={styles.searchWrapper}>
			<input
				className={styles.searchInput}
				onChange={(event) => onChangeSearchValue(event.target.value)}
				value={searchValue}
				type="text"
				placeholder="Поиск пиццы..."
			/>
			{searchValue && (
				<img
					onClick={() => onChangeSearchValue('')}
					className={styles.searchClear}
					src={clearSvg}
					alt="clear"
				/>
			)}
		</div>
	)
}

export default Search
