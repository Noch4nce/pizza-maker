import React from 'react'

import Header from '../Header/Header'
import MainPage from '../../pages/MainPage/MainPage'

const MainContent = () => {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<MainPage />
				</div>
			</div>
		</div>
	)
}

export default MainContent
