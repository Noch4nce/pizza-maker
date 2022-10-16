import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { PizzaItemTypes, ValidationErrors } from './pizzasTypes'

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
				'https://63356b088aa85b7c5d1ad1db.mockapi.io/items?' +
				(categoryId !== '0'
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