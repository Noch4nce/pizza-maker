import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PizzaSkeleton from '../../components/MainContent/MainItems/PizzaSkeleton/PizzaSkeleton'
import ErrorBlock from '../../components/ErrorBlock/ErrorBlock'
import { useAppDispatch } from '../../hooks/appHooks'
import { getPizzasDataSelector } from '../../redux/reducers/pizzasReducer/pizzasSelectors'
import { fetchPizzaById } from '../../redux/reducers/pizzasReducer/pizzaAsyncActions'

const DetailInfoPage: FC = () => {
	const params = useParams()
	const dispatch = useAppDispatch()
	const { pizzaItem, status } = useSelector(getPizzasDataSelector)

	useEffect(() => {
		if (params.id) {
			dispatch(fetchPizzaById(params.id))
		}
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
						pizzaItem && (
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
						)
					)}
				</div>
			)}
		</>
	)
}

export default DetailInfoPage
