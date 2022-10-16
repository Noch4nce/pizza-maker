import { RootStateType } from '../../store'

export const getPizzasDataSelector = (state: RootStateType) =>
	state.pizzasReducer
