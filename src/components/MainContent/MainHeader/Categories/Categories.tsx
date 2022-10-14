import React, { FC } from 'react'
import { useWhyDidYouUpdate } from 'ahooks'

import CategoriesItem from './CategoriesItem'

type PropTypes = {
	categoryId: number
	onClickChangeId: (index: number) => void
}

const Categories: FC<PropTypes> = React.memo(
	({ categoryId, onClickChangeId }) => {
		useWhyDidYouUpdate('Categories', { categoryId, onClickChangeId })

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
)

export default Categories
