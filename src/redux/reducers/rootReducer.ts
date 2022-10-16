import { combineReducers } from '@reduxjs/toolkit'
import filterReducer from './filterSlice'
import sortReducer from './sortReducer/sortSlice'
import paginationReducer from './paginationSlice'
import cartReducer from './cartReducer/cartSlice'
import pizzasReducer from './pizzasReducer/pizzasSlice'
import searchReducer from './searchSlice'

export const rootReducer = combineReducers({
	filterReducer,
	sortReducer,
	paginationReducer,
	cartReducer,
	pizzasReducer,
	searchReducer
})
