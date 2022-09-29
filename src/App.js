import './scss/app.scss'
import MainContent from './components/MainContent/MainContent'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<MainContent />} />
			<Route path="cart" element={<Cart />} />
		</Routes>
	</BrowserRouter>
)

export default App
