import React from 'react'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderCart from './HeaderCart/HeaderCart'
import Search from './Search/Search'

const Header = ({ searchValue, onChangeSearchValue }) => {
	return (
		<div className="header">
			<div className="container">
				<HeaderLogo />
				<Search searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} />
				<HeaderCart />
			</div>
		</div>
	)
}

export default Header
