import React from 'react'

const categoriesItems = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые'
]

const CategoriesItem = ({ categoryId, onClickChangeId }) => {
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
