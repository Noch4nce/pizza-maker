import { CartItemTypes } from '../redux/reducers/cartSlice'

export const calcTotalPriceCart = (data: CartItemTypes[]) =>
	data.reduce((accum, el) => el.price * el.countPizzas + accum, 0)
