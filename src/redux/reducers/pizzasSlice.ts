import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootStateType } from '../store'
import type { AxiosError } from 'axios'

type PizzaItemTypes = {
	id: string
	title: string
	imageUrl: string
	price: number
	category: number
	rating: number
	sizes: number[]
	types: number[]
}

type ValidationErrors = {
	errorMessage: string
}

export enum EnumStatus {
	LOADING = 'loading',
	SUCCESS = 'error',
	ERROR = 'success'
}

interface InitialStateInterface {
	pizzasItems: PizzaItemTypes[]
	pizzaItem: PizzaItemTypes | {}
	status: EnumStatus
}

const initialState: InitialStateInterface = {
	pizzasItems: [],
	pizzaItem: {}, // que: initial empty obj ?
	status: EnumStatus.LOADING
}

export const fetchPizzaById = createAsyncThunk(
	'pizza/fetchPizzaById',
	async (id: string, thunkAPI) => {
		try {
			const response = await axios.get<PizzaItemTypes>(
				'https://63356b088aa85b7c5d1ad1db.mockapi.io/items/' + id
			)

			console.log(response.data, 'RESP PIZZA BY ID')
			return response.data
		} catch (err: any) {
			const error: AxiosError<ValidationErrors> = err

			if (!error.response) {
				throw err
			}

			console.log(error, 'Response error')
			return thunkAPI.rejectWithValue('Response error')
		}
	}
)

export const fetchPizzasData = createAsyncThunk(
	'pizza/fetchPizzas',
	async (params: Record<string, string>, thunkAPI) => {
		const {
			categoryId,
			sortByAll,
			order,
			searchByTitle,
			page,
			sortByCategories
		} = params

		try {
			const response = await axios.get<PizzaItemTypes[]>(
				'https:// 63356b088aa85b7c5d1ad1db.mockapi.io/items?' +
					(categoryId
						? sortByCategories
						: sortByAll + order + page + searchByTitle)
			)

			console.log(response.data, 'RESP')
			return response.data
		} catch (err: any) {
			const error: AxiosError<ValidationErrors> = err

			if (!error.response) {
				throw err
			}

			console.log(error, 'Response error')
			return thunkAPI.rejectWithValue('Response error')
		}
	}
)

export const pizzasSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			fetchPizzasData.pending,
			(state: InitialStateInterface) => {
				state.status = EnumStatus.LOADING
				state.pizzasItems = []
			}
		)
		builder.addCase(
			fetchPizzasData.fulfilled,
			(
				state: InitialStateInterface,
				action: PayloadAction<PizzaItemTypes[]>
			) => {
				state.status = EnumStatus.SUCCESS
				state.pizzasItems = action.payload
			}
		)
		builder.addCase(
			fetchPizzasData.rejected,
			(state: InitialStateInterface) => {
				state.status = EnumStatus.ERROR
				state.pizzasItems = []
			}
		)

		builder.addCase(
			fetchPizzaById.pending,
			(state: InitialStateInterface) => {
				state.status = EnumStatus.LOADING
				state.pizzaItem = {}
			}
		)
		builder.addCase(
			fetchPizzaById.fulfilled,
			(state: InitialStateInterface, action) => {
				state.status = EnumStatus.SUCCESS
				state.pizzaItem = action.payload
			}
		)
		builder.addCase(
			fetchPizzaById.rejected,
			(state: InitialStateInterface) => {
				state.status = EnumStatus.ERROR
				state.pizzaItem = {}
			}
		)
	}
})

export const getPizzasDataSelector = (state: RootStateType) =>
	state.pizzasReducer

export default pizzasSlice.reducer
