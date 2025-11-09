import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/UI/Navbar/Navbar'
import PageNotFound from './pages/404'
import About from './pages/About'
import Posts from './pages/Posts'

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path='/about' element={<About />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
