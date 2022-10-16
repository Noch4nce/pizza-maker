import { RootStateType } from '../../store'

export const getCartDataSelector = (state: RootStateType) => state.cartReducer
export const getCartItemByIdSelector = (id: string) => (state: RootStateType) =>
	state.cartReducer.cartItems.find((item) => item.id === id)
export const getTotalCartCountSelector = (state: RootStateType) =>
	state.cartReducer.totalCartCount
