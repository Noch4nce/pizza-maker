import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = () => {
	return (
		<ReactPaginate
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
