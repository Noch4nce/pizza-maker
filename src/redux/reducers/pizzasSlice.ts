import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootStateType } from '../store'

type PizzaItemTypes = {
	id: string
	title: string
	imageUrl: string
	price: number
	sizes: number[]
	types: number[]
}

interface initialStateInterface {
	pizzasItems: PizzaItemTypes[]
	pizzaItem: PizzaItemTypes | {}
	status: 'loading' | 'error' | 'success'
}

const initialState: initialStateInterface = {
	pizzasItems: [],
	pizzaItem: {}, // que: initial empty obj ?
	status: 'loading'
}

export const fetchPizzaById = createAsyncThunk(
	'pizza/fetchPizzaById',
	async (id, thunkAPI) => {
		try {
			const response = await axios.get(
				'https://63356b088aa85b7c5d1ad1db.mockapi.io/items/' + id
			)

			console.log(response.data, 'RESP PIZZA BY ID')
			return response.data
		} catch (error) {
			console.log(error, 'Response error')
			return thunkAPI.rejectWithValue('Response error')
		}
	}
)

export const fetchPizzasData = createAsyncThunk(
	'pizza/fetchPizzas',
	async (params, thunkAPI) => {
		const {
			categoryId,
			sortByAll,
			order,
			searchByTitle,
			page,
			sortByCategories
		} = params

		try {
			const response = await axios.get(
				'https://63356b088aa85b7c5d1ad1db.mockapi.io/items?' +
					(categoryId
						? sortByCategories
						: sortByAll + order + page + searchByTitle)
			)

			console.log(response.data, 'RESP')
			return response.data
		} catch (error) {
			console.log(error, 'Response error')
			return thunkAPI.rejectWithValue('Response error')
		}
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
		[fetchPizzasData.pending]: (state: initialStateInterface) => {
			state.status = 'loading'
			state.pizzasItems = []
		},
		[fetchPizzasData.fulfilled]: (state: initialStateInterface, action) => {
			state.status = 'success'
			state.pizzasItems = action.payload
		},
		[fetchPizzasData.rejected]: (state: initialStateInterface, action) => {
			state.status = 'error'
			state.pizzasItems = action.payload
		},
		[fetchPizzaById.pending]: (state: initialStateInterface) => {
			state.status = 'loading'
			state.pizzaItem = {}
		},
		[fetchPizzaById.fulfilled]: (state: initialStateInterface, action) => {
			state.status = 'success'
			state.pizzaItem = action.payload
		},
		[fetchPizzaById.rejected]: (state: initialStateInterface, action) => {
			state.status = 'error'
			state.pizzaItem = action.payload
		}
	}
})

export const getPizzasDataSelector = (state: RootStateType) =>
	state.pizzasReducer

export const { addPizzasData } = pizzasSlice.actions

export default pizzasSlice.reducer
