import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	pizzasItems: [],
	pizzaItem: {},
	status: 'loading'
}

export const fetchPizzaById = createAsyncThunk(
	'pizza/fetchPizzaById',
	async (id) => {
		const response = await axios.get(
			'https://63356b088aa85b7c5d1ad1db.mockapi.io/items/' + id
		)

		console.log(response.data, 'RESP PIZZA BY ID')
		return response.data
	}
)

export const fetchPizzasData = createAsyncThunk(
	'pizza/fetchPizzas',
	async (params) => {
		const {
			categoryId,
			sortByAll,
			order,
			searchByTitle,
			page,
			sortByCategories
		} = params

		const response = await axios.get(
			'https://63356b088aa85b7c5d1ad1db.mockapi.io/items?' +
				(categoryId
					? sortByCategories
					: sortByAll + order + page + searchByTitle)
		)

		console.log(response.data, 'RESP')
		return response.data
	}
)

export const pizzasSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		addPizzasData(state, action) {
			state.pizzasItems = action.payload
		}
	},
	extraReducers: {
		[fetchPizzasData.pending]: (state) => {
			state.status = 'loading'
			state.pizzasItems = []
		},
		[fetchPizzasData.fulfilled]: (state, action) => {
			state.status = 'success'
			state.pizzasItems = action.payload
		},
		[fetchPizzasData.rejected]: (state) => {
			state.status = 'error'
			state.pizzasItems = []
		},
		[fetchPizzaById.pending]: (state) => {
			state.status = 'loading'
			state.pizzaItem = {}
		},
		[fetchPizzaById.fulfilled]: (state, action) => {
			state.status = 'success'
			state.pizzaItem = action.payload
		},
		[fetchPizzaById.rejected]: (state) => {
			state.status = 'error'
			state.pizzaItem = {}
		}
	}
})

export const getPizzasDataSelector = (state) => state.pizzasReducer

export const { addPizzasData } = pizzasSlice.actions

export default pizzasSlice.reducer
