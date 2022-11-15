import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PizzaSkeleton from '../../components/MainContent/MainItems/PizzaSkeleton/PizzaSkeleton'
import ErrorBlock from '../../components/ErrorBlock/ErrorBlock'
import { useAppDispatch } from '../../hooks/appHooks'
import { getPizzasDataSelector } from '../../redux/reducers/pizzasReducer/pizzasSelectors'
import { fetchPizzaById } from '../../redux/reducers/pizzasReducer/pizzaAsyncActions'
import styles from './styles.module.scss'

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
							<div className={styles.pizzaWrapper}>
								<img
									className={styles.pizzaImg}
									src={pizzaItem.imageUrl}
									alt={pizzaItem.title}
								/>

								<div className={styles.pizzaContent}>
									<div>
										<h4 className="pizza-block__title">
											{pizzaItem.title}
										</h4>

										<span className={styles.pizzaSelector}>
											30 см, традиционное тесто, 570 г
										</span>

										<div
											className={styles.pizzaDescription}
										>
											{pizzaItem.description}
										</div>
									</div>

									<div
										className={`button ${styles.pizzaBtn}`}
									>
										<span>
											Добавить в корзину за{' '}
											{pizzaItem.price} ₽
										</span>
									</div>
								</div>
							</div>
						)
					)}
				</div>
			)}
		</>
	)
}

export default DetailInfoPage
