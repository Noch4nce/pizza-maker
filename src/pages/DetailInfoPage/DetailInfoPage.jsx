import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
	fetchPizzaById,
	getPizzasDataSelector
} from '../../redux/reducers/pizzasSlice'
import PizzaSkeleton from '../../components/MainContent/MainItems/PizzaSkeleton/PizzaSkeleton'
import ErrorBlock from '../../components/ErrorBlock/ErrorBlock'

const DetailInfoPage = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const { pizzaItem, status } = useSelector(getPizzasDataSelector)

	useEffect(() => {
		dispatch(fetchPizzaById(params.id))
	}, [])

	return (
		<>
			{status === 'error' ? (
				<ErrorBlock />
			) : (
				<div className="pizza-block__wrapper">
					{status === 'loading' ? (
						<PizzaSkeleton />
					) : (
						<div className="pizza-block">
							<img
								className="pizza-block__image"
								src={pizzaItem.imageUrl}
								alt={pizzaItem.title}
							/>
							<h4 className="pizza-block__title">
								{pizzaItem.title}
							</h4>

							<span className="pizza-block__price">
								от {pizzaItem.price} ₽
							</span>
						</div>
					)}
				</div>
			)}
		</>
	)
}

export default DetailInfoPage
