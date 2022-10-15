import { calcTotalPriceCart } from './calcTotalPriceCart'
import { calcTotalCartItemsCount } from './calcTotalCartItemsCount'

export const getCartItemsLS = () => {
	const data = localStorage.getItem('cartData')
	const parsedData = data ? JSON.parse(data) : []

	const totalPrice = calcTotalPriceCart(parsedData)
	const totalCartItemsCount = calcTotalCartItemsCount(parsedData)

	return {
		totalPrice,
		cartItems: parsedData,
		totalCartItemsCount
	}
}
