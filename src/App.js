import React, { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import MainPage from './pages/MainPage/MainPage'
import CartPage from './pages/CartPage/CartPage'
import './scss/app.scss'

export const SearchContext = createContext('')

const App = () => {
	const [searchValue, setSearchValue] = useState('')

	return (
		<div className="wrapper">
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<div className="content">
					<div className="container">
						<Routes>
							<Route path="*" element={<NotFoundPage />} />

							<Route
								path="/"
								element={<MainPage searchValue={searchValue} />}
							/>
							<Route path="cart" element={<CartPage />} />
						</Routes>
					</div>
				</div>
			</SearchContext.Provider>
		</div>
	)
}

export default App
