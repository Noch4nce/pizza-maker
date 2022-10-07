import { combineReducers } from '@reduxjs/toolkit'
import filterReducer from './filterSlice'

export const rootReducer = combineReducers({
	filterReducer
})
