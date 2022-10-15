import { CartItemTypes } from '../redux/reducers/cartSlice'

export const calcTotalCartItemsCount = (data: CartItemTypes[]) =>
	data.reduce((accum, el) => el.countPizzas + accum, 0)
