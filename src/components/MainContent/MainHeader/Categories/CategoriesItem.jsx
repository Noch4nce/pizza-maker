import React, { useState } from 'react'

const categoriesItems = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые'
]

const CategoriesItem = () => {
	const [categoryIndex, setCategoryIndex] = useState(0)

	const handleChangeIndex = (index) => {
		setCategoryIndex(index)
	}

	return (
		<>
			{categoriesItems.map((item, index) => (
				<li
					key={index}
					onClick={() => handleChangeIndex(index)}
					className={categoryIndex === index ? 'active' : ''}
				>
					{item}
				</li>
			))}
		</>
	)
}

export default CategoriesItem
