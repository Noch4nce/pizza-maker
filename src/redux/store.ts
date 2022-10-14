import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers/rootReducer'

export const store = configureStore({
	reducer: rootReducer
})

type GetStoreStateType = typeof store.getState
export type RootStateType = ReturnType<GetStoreStateType>
export type AppDispatch = typeof store.dispatch
