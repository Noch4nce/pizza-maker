import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage/MainPage'
import MainLayout from './layouts/MainLayout'
import './scss/app.scss'

const CartPage = React.lazy(() => import('./pages/CartPage/CartPage'))
const DetailInfoPage = React.lazy(
	() => import('./pages/DetailInfoPage/DetailInfoPage')
)
const NotFoundPage = React.lazy(
	() => import('./pages/NotFoundPage/NotFoundPage')
)

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route
					path="*"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<NotFoundPage />
						</Suspense>
					}
				/>

				<Route path="" element={<MainPage />} />

				<Route
					path="cart"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<CartPage />
						</Suspense>
					}
				/>

				<Route
					path="pizza/:id"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<DetailInfoPage />
						</Suspense>
					}
				/>
			</Route>
		</Routes>
	)
}

export default App
