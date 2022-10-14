import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStateType } from '../store'

interface initialStateInterface {
	searchValue: string
}

const initialState: initialStateInterface = {
	searchValue: ''
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload
		}
	}
})

export const getSearchValueSelector = (state: RootStateType) =>
	state.searchReducer.searchValue

export const { setSearchValue } = searchSlice.actions

export default searchSlice.reducer
