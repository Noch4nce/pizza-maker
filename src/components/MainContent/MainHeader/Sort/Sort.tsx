import React, { FC, useEffect, useRef, useState } from 'react'
import { useWhyDidYouUpdate } from 'ahooks'

import { EnumSortTypes } from '../../../../redux/reducers/sortReducer/sortTypes'

export const sortItems: SortItemTypes[] = [
	{
		id: 0,
		name: 'популярности',
		type: EnumSortTypes.RATING,
		orderName: 'взр',
		order: 'asc'
	},
	{
		id: 1,
		name: 'популярности',
		type: EnumSortTypes.RATING,
		orderName: 'убв',
		order: 'desc'
	},
	{
		id: 2,
		name: 'цене',
		type: EnumSortTypes.PRICE,
		orderName: 'взр',
		order: 'asc'
	},
	{
		id: 3,
		name: 'цене',
		type: EnumSortTypes.PRICE,
		orderName: 'убв',
		order: 'desc'
	},
	{
		id: 4,
		name: 'алфавиту',
		type: EnumSortTypes.TITLE,
		orderName: 'взр',
		order: 'asc'
	},
	{
		id: 5,
		name: 'алфавиту',
		type: EnumSortTypes.TITLE,
		orderName: 'убв',
		order: 'desc'
	}
]

type SortItemTypes = {
	id: number
	name: string
	type: EnumSortTypes
	orderName: string
	order: string
}

type PropTypes = {
	sortSelectedTab: SortItemTypes
	onClickSortTab: (item: SortItemTypes) => void
}

type EventPathType = MouseEvent & {
	path: Node[]
}

const Sort: FC<PropTypes> = React.memo(
	({ sortSelectedTab, onClickSortTab }) => {
		useWhyDidYouUpdate('Sort', { sortSelectedTab, onClickSortTab })

		const [isOpen, setIsOpen] = useState(false)
		const sortRef = useRef<HTMLDivElement>(null)

		const handleSortByItem = (item: SortItemTypes) => {
			onClickSortTab(item)
			setIsOpen(false)
		}

		const handleCloseOutsidePopup = (event: MouseEvent) => {
			const _event = event as EventPathType

			if (sortRef.current && !_event.path.includes(sortRef.current)) {
				setIsOpen(false)
			}
		}

		useEffect(() => {
			document.body.addEventListener('click', handleCloseOutsidePopup)

			return () => {
				document.body.removeEventListener(
					'click',
					handleCloseOutsidePopup
				)
			}
			// que: поч не ремувит
			// document.body.addEventListener('click', (event) =>
			// 	handleCloseOutsidePopup(event)
			// )
			//
			// return () => {
			// 	document.body.removeEventListener('click', (event) =>
			// 		handleCloseOutsidePopup(event)
			// 	)
			// }
		}, [])

		return (
			<div ref={sortRef} className="sort">
				<div className="sort__label">
					<svg
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
							fill="#2C2C2C"
						/>
					</svg>
					<b>Сортировка по:</b>
					<span onClick={() => setIsOpen(!isOpen)}>
						{sortSelectedTab.name}{' '}
						{`(${sortSelectedTab.orderName})`}
					</span>
				</div>
				{isOpen && (
					<div className="sort__popup">
						<ul>
							{sortItems.map((item) => (
								<li
									key={item.id}
									onClick={() => handleSortByItem(item)}
									className={
										item.id === sortSelectedTab.id
											? 'active'
											: ''
									}
								>
									{item.name} {`(${item.orderName})`}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		)
	}
)

export default Sort
