import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './styles.module.scss'

const Pagination = ({ pageCount, setPageNumber }) => {
	return (
		<ReactPaginate
			className={styles.paginateRoot}
			breakLabel="..."
			nextLabel=">"
			onPageChange={(event) => setPageNumber(event.selected)}
			pageRangeDisplayed={8}
			pageCount={pageCount}
			previousLabel="<"
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination
