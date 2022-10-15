import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStateType } from '../store'
import { getCartItemsLS } from '../../utils/getCartItemsLS'

const { totalPrice, cartItems, totalCartItemsCount } = getCartItemsLS()

export type CartItemTypes = {
	id: string
	title: string
	imageUrl: string
	price: number
	size: number
	type: string
	countPizzas: number
}

interface InitialStateInterface {
	totalPrice: number
	cartItems: CartItemTypes[]
	totalCartCount: number
}

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

export const getCartDataSelector = (state: RootStateType) => state.cartReducer
export const getCartItemByIdSelector = (id: string) => (state: RootStateType) =>
	state.cartReducer.cartItems.find((item) => item.id === id)
export const getTotalCartCountSelector = (state: RootStateType) =>
	state.cartReducer.totalCartCount

export const { addCartItem, removeCartPerItem, deleteCartItem, clearAllCart } =
	cartSlice.actions

export default cartSlice.reducer
