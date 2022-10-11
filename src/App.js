import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import MainPage from './pages/MainPage/MainPage'
import CartPage from './pages/CartPage/CartPage'
import './scss/app.scss'

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<Routes>
						<Route path="*" element={<NotFoundPage />} />

						<Route path="/" element={<MainPage />} />
						<Route path="cart" element={<CartPage />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
