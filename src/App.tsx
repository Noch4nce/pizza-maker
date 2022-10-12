import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import MainPage from './pages/MainPage/MainPage'
import CartPage from './pages/CartPage/CartPage'
import DetailInfoPage from './pages/DetailInfoPage/DetailInfoPage'
import MainLayout from './layouts/MainLayout'
import './scss/app.scss'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="*" element={<NotFoundPage />} />

				<Route path="" element={<MainPage />} />
				<Route path="cart" element={<CartPage />} />
				<Route path="pizza/:id" element={<DetailInfoPage />} />
			</Route>
		</Routes>
	)
}

export default App
