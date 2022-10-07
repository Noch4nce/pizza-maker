import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './styles.module.scss'

const Pagination = ({ onChangePageNumber }) => {
	return (
		<ReactPaginate
			className={styles.paginateRoot}
			breakLabel="..."
			nextLabel=">"
			onPageChange={(event) => onChangePageNumber(event.selected)}
			pageRangeDisplayed={8}
			pageCount={2}
			previousLabel="<"
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination
