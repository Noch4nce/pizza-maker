import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks/appHooks'

import { addCartItem } from '../../../redux/reducers/cartReducer/cartSlice'
import { getCartItemByIdSelector } from '../../../redux/reducers/cartReducer/cartSelectors'
// import pizzasData from '../../../assets/pizzas.json'

const typeNames: string[] = ['тонкое', 'традиционное']

type PropTypes = {
	id: string
	title: string
	imageUrl: string
	price: number
	sizes: number[]
	types: number[]
}

const PizzaBlock: FC<PropTypes> = ({
	id,
	imageUrl,
	title,
	price,
	sizes,
	types
}) => {
	const dispatch = useAppDispatch()
	const cartItem = useSelector(getCartItemByIdSelector(id))
	const [activeSizeIndex, setActiveSizeIndex] = useState(0)
	const [activeTypeIndex, setActiveTypeIndex] = useState(0)

	const cartItemCount = cartItem ? cartItem.countPizzas : 0
	// const findItem = cartItems.find((item) => item.id === id)

	const handleAddPizzaToCart = () => {
		const generatedPizzaItem = {
			id,
			title,
			imageUrl,
			price,
			type: typeNames[activeTypeIndex],
			size: sizes[activeSizeIndex],
			countPizzas: 1
		}

		dispatch(addCartItem(generatedPizzaItem))
	}

	return (
		<div className="pizza-block__wrapper">
			<div className="pizza-block">
				<Link to={`/pizza/${id}`}>
					<img
						className="pizza-block__image"
						src={imageUrl}
						alt={title}
					/>
				</Link>
				<h4 className="pizza-block__title">{title}</h4>
				<div className="pizza-block__selector">
					<ul>
						{types.map((typeId) => (
							<li
								key={typeId}
								onClick={() => setActiveTypeIndex(typeId)}
								className={
									typeId === activeTypeIndex ? 'active' : ''
								}
							>
								{typeNames[typeId]}
							</li>
						))}
					</ul>
					<ul>
						{sizes.map((size, index) => (
							<li
								key={index}
								onClick={() => setActiveSizeIndex(index)}
								className={
									index === activeSizeIndex ? 'active' : ''
								}
							>
								{size} см.
							</li>
						))}
					</ul>
				</div>
				<div className="pizza-block__bottom">
					<div className="pizza-block__price">от {price} ₽</div>
					<div
						onClick={handleAddPizzaToCart}
						className="button button--outline button--add"
					>
						<span>Выбрать</span>
						{cartItemCount > 0 && <i>{cartItemCount}</i>}
					</div>
				</div>
			</div>

			{/*{pizzasData.map((data) => {*/}
			{/*	const { imageUrl, title, price, sizes, types } = data //que: передача через пропсы или сразу вытаскивать?(свои входные данные)*/}
			{/*	console.log(title, "title")*/}
			{/*	return (*/}
			{/*		<div className="pizza-block">*/}
			{/*			<img*/}
			{/*				className="pizza-block__image"*/}
			{/*				src={imageUrl}*/}
			{/*				alt={title}*/}
			{/*			/>*/}
			{/*			<h4 className="pizza-block__title">{title}</h4>*/}
			{/*			<div className="pizza-block__selector">*/}
			{/*				<ul>*/}
			{/*					{types.map((typeId) => (*/}
			{/*						<li*/}
			{/*							key={typeId}*/}
			{/*							onClick={() =>*/}
			{/*								setActiveTypeIndex(typeId)*/}
			{/*							}*/}
			{/*							className={*/}
			{/*								typeId === activeTypeIndex*/}
			{/*									? 'active'*/}
			{/*									: ''*/}
			{/*							}*/}
			{/*						>*/}
			{/*							{typeNames[typeId]}*/}
			{/*						</li>*/}
			{/*					))}*/}
			{/*				</ul>*/}
			{/*				<ul>*/}
			{/*					{sizes.map((size, index) => (*/}
			{/*						<li*/}
			{/*							key={index}*/}
			{/*							onClick={() =>*/}
			{/*								setActiveSizeIndex(index)*/}
			{/*							}*/}
			{/*							className={*/}
			{/*								index === activeSizeIndex*/}
			{/*									? 'active'*/}
			{/*									: ''*/}
			{/*							}*/}
			{/*						>*/}
			{/*							{size} см.*/}
			{/*						</li>*/}
			{/*					))}*/}
			{/*				</ul>*/}
			{/*			</div>*/}
			{/*			<div className="pizza-block__bottom">*/}
			{/*				<div className="pizza-block__price">*/}
			{/*					от {price} ₽*/}
			{/*				</div>*/}
			{/*				<div className="button button--outline button--add">*/}
			{/*					<svg*/}
			{/*						width="12"*/}
			{/*						height="12"*/}
			{/*						viewBox="0 0 12 12"*/}
			{/*						fill="none"*/}
			{/*						xmlns="http://www.w3.org/2000/svg"*/}
			{/*					>*/}
			{/*						<path*/}
			{/*							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"*/}
			{/*							fill="white"*/}
			{/*						/>*/}
			{/*					</svg>*/}
			{/*					<span>Добавить</span>*/}
			{/*					<i>2</i>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	)*/}
			{/*})}*/}
		</div>
	)
}

export default PizzaBlock
