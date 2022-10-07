import React, { useCallback, useContext, useRef, useState } from 'react'
import debounce from 'lodash.debounce'

import { SearchContext } from '../../../App'
import clearSvg from '../../../assets/images/clear.svg'
import styles from './styles.module.scss'

const Search = () => {
	const [inputValue, setInputValue] = useState('')
	const { setSearchValue } = useContext(SearchContext)
	const focusInputRef = useRef(null)

	const debounceSearch = useCallback(
		debounce((target) => {
			setSearchValue(target)
		}, 1000),
		[]
	)

	const handleSetSearchValue = (event) => {
		setInputValue(event.target.value)
		debounceSearch(event.target.value)
	}

	const handleClearInput = () => {
		setInputValue('')
		setSearchValue('')
		focusInputRef.current.focus()
	}

	return (
		<div className={styles.searchWrapper}>
			<input
				className={styles.searchInput}
				onChange={(event) => handleSetSearchValue(event)}
				value={inputValue}
				type="text"
				placeholder="Поиск пиццы..."
				ref={focusInputRef}
			/>
			{inputValue && (
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
