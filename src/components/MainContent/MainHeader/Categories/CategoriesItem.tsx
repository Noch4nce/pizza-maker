import React, { FC } from 'react'

const categoriesItems: string[] = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые'
]

type PropTypes = {
	categoryId: number
	onClickChangeId: (index: number) => void
}

const CategoriesItem: FC<PropTypes> = ({ categoryId, onClickChangeId }) => {
	return (
		<>
			{categoriesItems.map((item, index) => (
				<li
					key={index}
					onClick={() => onClickChangeId(index)}
					className={categoryId === index ? 'active' : ''}
				>
					{item}
				</li>
			))}
		</>
	)
}

export default CategoriesItem
