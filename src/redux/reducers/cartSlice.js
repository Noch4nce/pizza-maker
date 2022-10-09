import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalPrice: 0,
	cartItems: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem(state, action) {
			state.cartItems.push(action.payload)

			state.totalPrice += action.payload.price
		}
	}
})

export const { addCartItem } = cartSlice.actions

export default cartSlice.reducer
