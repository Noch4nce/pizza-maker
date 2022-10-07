import { combineReducers } from '@reduxjs/toolkit'
import filterReducer from './filterSlice'
import sortReducer from './sortSlice'
import paginationReducer from './paginationSlice'

export const rootReducer = combineReducers({
	filterReducer,
	sortReducer,
	paginationReducer
})
