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
	const [active, setActive] = useState('Все')

	const handleActive = (e) => {
		setActive(e.target.textContent)
	}

	return (
		<>
			{/*<li className="active">Все</li>*/}
			{/*<li>Мясные</li>*/}
			{/*<li>Вегетарианская</li>*/}
			{/*<li>Гриль</li>*/}
			{/*<li>Острые</li>*/}
			{/*<li>Закрытые</li>*/}

			{categoriesItems.map((item) => (
				<li
					onClick={(e) => handleActive(e)}
					className={item === active ? 'active' : ''}
				>
					{item}
				</li>
			))}
		</>
	)
}

export default CategoriesItem
