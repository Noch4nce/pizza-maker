export enum EnumSortTypes {
	RATING = 'rating',
	PRICE = 'price',
	TITLE = 'title'
}

export type SortItemTypes = {
	id: number
	name: string
	type: EnumSortTypes
	orderName: string
	order: string
}

export interface initialStateInterface {
	sortSelectedTab: SortItemTypes
}
