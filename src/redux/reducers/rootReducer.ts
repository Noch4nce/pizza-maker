import { combineReducers } from '@reduxjs/toolkit'
import filterReducer from './filterSlice'
import sortReducer from './sortSlice'
import paginationReducer from './paginationSlice'
import cartReducer from './cartSlice'
import pizzasReducer from './pizzasSlice'
import searchReducer from './searchSlice'

export const rootReducer = combineReducers({
	filterReducer,
	sortReducer,
	paginationReducer,
	cartReducer,
	pizzasReducer,
	searchReducer
})
