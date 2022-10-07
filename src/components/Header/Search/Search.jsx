import React, { useContext, useEffect, useRef } from 'react'

import { SearchContext } from '../../../App'
import clearSvg from '../../../assets/images/clear.svg'
import styles from './styles.module.scss'

const Search = () => {
	const { searchValue, setSearchValue } = useContext(SearchContext)
	const focusInput = useRef(null)

	useEffect(() => {
		if (focusInput.current) {
			focusInput.current.focus()
		}
	}, [searchValue])

	return (
		<div className={styles.searchWrapper}>
			<input
				className={styles.searchInput}
				onChange={(event) => setSearchValue(event.target.value)}
				value={searchValue}
				type="text"
				placeholder="Поиск пиццы..."
				ref={focusInput}
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
