import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './styles.module.scss'

const Pagination = () => {
	return (
		<ReactPaginate
			className={styles.paginateRoot}
			breakLabel="..."
			nextLabel=">"
			onPageChange={(e) => console.log(e)}
			pageRangeDisplayed={5}
			pageCount={3}
			previousLabel="<"
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination
