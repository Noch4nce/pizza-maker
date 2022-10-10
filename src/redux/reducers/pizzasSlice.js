import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	pizzasData: [],
	status: 'loading'
}

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
			state.pizzasData = action.payload
		}
	},
	extraReducers: {
		[fetchPizzasData.pending]: (state) => {
			state.status = 'loading'
		},
		[fetchPizzasData.fulfilled]: (state, action) => {
			state.status = 'success'
			state.pizzasData = action.payload
		},
		[fetchPizzasData.rejected]: (state) => {
			state.status = 'error'
		}
	}
})

export const { addPizzasData } = pizzasSlice.actions

export default pizzasSlice.reducer
