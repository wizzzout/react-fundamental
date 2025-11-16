import { BrowserRouter } from 'react-router'
import './App.css'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/Navbar/Navbar'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
