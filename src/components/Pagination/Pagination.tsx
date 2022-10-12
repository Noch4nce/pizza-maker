import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'

import styles from './styles.module.scss'

type PropTypes = {
	onChangePageNumber: (selected: number) => void
}

const Pagination: FC<PropTypes> = ({ onChangePageNumber }) => {
	return (
		<ReactPaginate
			className={styles.paginateRoot}
			breakLabel="..."
			nextLabel=">"
			onPageChange={(event) => onChangePageNumber(event.selected)}
			pageRangeDisplayed={8}
			pageCount={2}
			previousLabel="<"
		/>
	)
}

export default Pagination
