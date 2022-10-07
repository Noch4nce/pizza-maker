import React, { useContext, useRef } from 'react'

import { SearchContext } from '../../../App'
import clearSvg from '../../../assets/images/clear.svg'
import styles from './styles.module.scss'

const Search = () => {
	const { searchValue, setSearchValue } = useContext(SearchContext)
	const focusInput = useRef(null)

	const handleClearInput = () => {
		setSearchValue('')
		focusInput.current.focus()
	}

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
					onClick={() => handleClearInput()}
					className={styles.searchClear}
					src={clearSvg}
					alt="clear"
				/>
			)}
		</div>
	)
}

export default Search
