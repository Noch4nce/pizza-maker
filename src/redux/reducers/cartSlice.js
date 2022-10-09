import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalPrice: 0,
	cartItems: [],
	totalCartCount: 0
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem(state, action) {
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
		removeCartPerItem(state, action) {
			const findItem = state.cartItems.find(
				(item) => item.id === action.payload.id
			)

			findItem.countPizzas -= 1
			state.totalPrice -= action.payload.price
			state.totalCartCount -= 1
		}
	}
})

export const { addCartItem, removeCartPerItem } = cartSlice.actions

export default cartSlice.reducer
