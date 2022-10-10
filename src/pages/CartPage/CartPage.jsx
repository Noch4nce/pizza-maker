import React from 'react'
import { useSelector } from 'react-redux'

import CartEmpty from '../../components/Cart/CartEmpty'
import Cart from '../../components/Cart/Cart'

const CartPage = () => {
	const totalCartCount = useSelector(
		(state) => state.cartReducer.totalCartCount
	)

	if (totalCartCount <= 0) {
		return <CartEmpty />
	}

	return (
		<div className="container--cart">
			<Cart />
		</div>
	)
}

export default CartPage
