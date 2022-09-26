import React from 'react'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderCart from './HeaderCart/HeaderCart'

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<HeaderLogo />
				<HeaderCart />
			</div>
		</div>
	)
}

export default Header
