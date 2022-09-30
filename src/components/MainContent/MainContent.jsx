import React from 'react'

import Header from '../Header/Header'
import MainPage from '../../pages/MainPage/MainPage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'

const MainContent = () => {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					{/*<MainPage />*/}
					<NotFoundPage />
				</div>
			</div>
		</div>
	)
}

export default MainContent
