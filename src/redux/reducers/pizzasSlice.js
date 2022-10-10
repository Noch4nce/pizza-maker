import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	pizzasData: []
}

export const pizzasSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		addPizzasData(state, action) {
			state.pizzasData = action.payload
		}
	}
})

export const { addPizzasData } = pizzasSlice.actions

export default pizzasSlice.reducer
