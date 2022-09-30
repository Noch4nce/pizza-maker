import './scss/app.scss'
import MainContent from './components/MainContent/MainContent'
import Cart from './components/Cart/Cart'
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Header from './components/Header/Header'
import React from 'react'

const App = () => (
	<div className="wrapper">
		<Header />
		<Routes>
			<Route path="*" element={<NotFoundPage />} />

			<Route path="/" element={<MainContent />} />
			<Route path="cart" element={<Cart />} />
		</Routes>
	</div>
)

export default App
