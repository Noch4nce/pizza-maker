import React, { FC, useCallback, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'

import clearSvg from '../../../assets/images/clear.svg'
import { setSearchValue } from '../../../redux/reducers/searchSlice'
import styles from './styles.module.scss'

const Search: FC = () => {
	const dispatch = useDispatch()
	const [inputValue, setInputValue] = useState('')
	const focusInputRef = useRef<HTMLInputElement>(null)

	const debounceSearch = useCallback(
		debounce((target: string) => {
			dispatch(setSearchValue(target))
		}, 1000),
		[]
	)

	const handleSetSearchValue = (event: any) => {
		setInputValue(event.target.value)
		debounceSearch(event.target.value)
	}

	const handleClearInput = () => {
		setInputValue('')
		dispatch(setSearchValue(''))

		if (focusInputRef.current) {
			focusInputRef.current.focus()
		}
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
