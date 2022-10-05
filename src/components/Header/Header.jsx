import React from 'react'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderCart from './HeaderCart/HeaderCart'
import Search from './Search/Search'

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<HeaderLogo />
				<Search />
				<HeaderCart />
			</div>
		</div>
	)
}

export default Header
