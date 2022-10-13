import { createSlice } from '@reduxjs/toolkit'
import { RootStateType } from '../store'

interface initialStateInterface {
	categoryId: number
}

const initialState: initialStateInterface = {
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

export const getCategoryIdSelector = (state: RootStateType) =>
	state.filterReducer.categoryId

export const { setCategoryId } = filterSlice.actions

export default filterSlice.reducer
