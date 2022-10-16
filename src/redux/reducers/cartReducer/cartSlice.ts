import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCartItemsLS } from '../../../utils/getCartItemsLS'
import { CartItemTypes, InitialStateInterface } from './cartTypes'

const { totalPrice, cartItems, totalCartItemsCount } = getCartItemsLS()

const initialState: InitialStateInterface = {
	totalPrice,
	cartItems,
	totalCartCount: totalCartItemsCount
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem(state, action: PayloadAction<CartItemTypes>) {
			const findItem = state.cartItems.find(
				(item) => item.id === action.payload.id
			)

			if (findItem) {
				findItem.countPizzas += 1
			} else {
				state.cartItems.push(action.payload)
			}

			state.totalPrice += action.payload.price
			state.totalCartCount += 1
		},
		removeCartPerItem(
			state,
			action: PayloadAction<{ id: string; price: number }>
		) {
			const findItem = state.cartItems.find(
				(item) => item.id === action.payload.id
			)

			if (findItem) {
				findItem.countPizzas -= 1
			}
			state.totalPrice -= action.payload.price
			state.totalCartCount -= 1
		},
		deleteCartItem(
			state,
			action: PayloadAction<{
				id: string
				countPizzas: number
				priceByItem: number
			}>
		) {
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== action.payload.id
			)

			state.totalPrice -= action.payload.priceByItem
			state.totalCartCount -= action.payload.countPizzas
		},
		clearAllCart(state) {
			state.cartItems = []

			state.totalPrice = 0
			state.totalCartCount = 0
		}
	}
})

export const { addCartItem, removeCartPerItem, deleteCartItem, clearAllCart } =
	cartSlice.actions

export default cartSlice.reducer
