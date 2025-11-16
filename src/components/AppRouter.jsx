import { Route, Routes } from 'react-router'
import PageNotFound from '../pages/404'
import About from '../pages/About'
import PostIdPage from '../pages/PostIdPage'
import Posts from '../pages/Posts'

export default function AppRouter() {
	return (
		<Routes>
			<Route path='/' element={<About />} />
			<Route path='/about' element={<About />} />
			<Route path='/posts' element={<Posts />} />
			<Route path='/posts/:id' element={<PostIdPage />} />
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	)
}
