import { createSlice } from '@reduxjs/toolkit'
import { RootStateType } from '../store'

interface initialStateInterface {
	pageNumber: number
}

const initialState: initialStateInterface = {
	pageNumber: 0
}

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setPageNumber(state, action) {
			state.pageNumber = action.payload
		}
	}
})

export const getPageNumberSelector = (state: RootStateType) =>
	state.paginationReducer.pageNumber

export const { setPageNumber } = paginationSlice.actions

export default paginationSlice.reducer
