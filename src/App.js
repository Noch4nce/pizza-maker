import './scss/app.scss'
import MainContent from './components/MainContent/MainContent'
import Cart from './components/Cart/Cart'
import { Routes, Route } from 'react-router-dom'

const App = () => (
	<Routes>
		<Route path="/" element={<MainContent />} />
		<Route path="cart" element={<Cart />} />
	</Routes>
)

export default App
