import React from 'react'
import CategoriesItem from './CategoriesItem'

const Categories = ({ categoryId, onClickChangeId }) => {
	return (
		<div className="categories">
			<ul>
				<CategoriesItem
					categoryId={categoryId}
					onClickChangeId={onClickChangeId}
				/>
			</ul>
		</div>
	)
}

export default Categories
