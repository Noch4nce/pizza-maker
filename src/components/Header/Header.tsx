import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'

import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderCart from './HeaderCart/HeaderCart'
import Search from './Search/Search'

const Header: FC = () => {
	const location = useLocation()

	return (
		<div className="header">
			<div className="container">
				<HeaderLogo />
				{location.pathname !== '/cart' && <Search />}
				<HeaderCart />
			</div>
		</div>
	)
}

export default Header
