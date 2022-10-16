import { RootStateType } from '../../store'

export const getSortSelectedTabSelector = (state: RootStateType) =>
	state.sortReducer.sortSelectedTab
