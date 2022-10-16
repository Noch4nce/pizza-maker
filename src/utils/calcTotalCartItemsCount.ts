import { CartItemTypes } from '../redux/reducers/cartReducer/cartTypes'

export const calcTotalCartItemsCount = (data: CartItemTypes[]) =>
	data.reduce((accum, el) => el.countPizzas + accum, 0)
