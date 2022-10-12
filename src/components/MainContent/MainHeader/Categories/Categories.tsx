import React, { FC } from 'react'
import CategoriesItem from './CategoriesItem'

type PropTypes = {
	categoryId: number
	onClickChangeId: () => void
}

const Categories: FC<PropTypes> = ({ categoryId, onClickChangeId }) => {
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
