export type CartItemTypes = {
	id: string
	title: string
	imageUrl: string
	price: number
	size: number
	type: string
	countPizzas: number
}

export interface InitialStateInterface {
	totalPrice: number
	cartItems: CartItemTypes[]
	totalCartCount: number
}
