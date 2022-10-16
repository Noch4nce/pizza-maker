import { CartItemTypes } from '../redux/reducers/cartReducer/cartTypes'

export const calcTotalPriceCart = (data: CartItemTypes[]) =>
	data.reduce((accum, el) => el.price * el.countPizzas + accum, 0)
