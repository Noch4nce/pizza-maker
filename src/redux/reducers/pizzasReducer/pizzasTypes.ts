export type PizzaItemTypes = {
	id: string
	title: string
	description: string
	imageUrl: string
	price: number
	category: number
	rating: number
	sizes: number[]
	types: number[]
}

export type ValidationErrors = {
	errorMessage: string
}

export enum EnumStatus {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}

export interface InitialStateInterface {
	pizzasItems: PizzaItemTypes[]
	pizzaItem: PizzaItemTypes | null
	status: EnumStatus
}
