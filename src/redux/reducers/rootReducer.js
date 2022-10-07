import { combineReducers } from '@reduxjs/toolkit'
import filterReducer from './filterSlice'
import sortReducer from './sortSlice'

export const rootReducer = combineReducers({
	filterReducer,
	sortReducer
})
