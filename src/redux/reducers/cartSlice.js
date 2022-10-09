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

		}
	}
})

export const { addCartItem } = cartSlice.actions

export default cartSlice.reducer
