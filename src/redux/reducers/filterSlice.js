import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	categoryId: 0
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId: (state, action) => {
			state.categoryId = action.payload
		}
	}
})

export const getCategoryIdSelector = (state) => state.filterReducer.categoryId

export const { setCategoryId } = filterSlice.actions

export default filterSlice.reducer
