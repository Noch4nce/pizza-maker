import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
	EnumStatus,
	InitialStateInterface,
	PizzaItemTypes
} from './pizzasTypes'
import { fetchPizzaById, fetchPizzasData } from './pizzaAsyncActions'

const initialState: InitialStateInterface = {
	pizzasItems: [],
	pizzaItem: null, // que: initial empty obj ?
	status: EnumStatus.LOADING
}

export const pizzasSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			fetchPizzasData.pending,
			(state: InitialStateInterface) => {
				state.status = EnumStatus.LOADING
				state.pizzasItems = []
			}
		)
		builder.addCase(
			fetchPizzasData.fulfilled,
			(
				state: InitialStateInterface,
				action: PayloadAction<PizzaItemTypes[]>
			) => {
				state.status = EnumStatus.SUCCESS
				state.pizzasItems = action.payload
			}
		)
		builder.addCase(
			fetchPizzasData.rejected,
			(state: InitialStateInterface) => {
				state.status = EnumStatus.ERROR
				state.pizzasItems = []
			}
		)

		builder.addCase(
			fetchPizzaById.pending,
			(state: InitialStateInterface) => {
				state.status = EnumStatus.LOADING
				state.pizzaItem = null
			}
		)
		builder.addCase(
			fetchPizzaById.fulfilled,
			(state: InitialStateInterface, action) => {
				state.status = EnumStatus.SUCCESS
				state.pizzaItem = action.payload
			}
		)
		builder.addCase(
			fetchPizzaById.rejected,
			(state: InitialStateInterface) => {
				state.status = EnumStatus.ERROR
				state.pizzaItem = null
			}
		)
	}
})

export default pizzasSlice.reducer
