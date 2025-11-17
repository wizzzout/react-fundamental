import About from '../pages/About'
import PostIdPage from '../pages/PostIdPage'
import Posts from '../pages/Posts'

export const routes = [
	{
		path: '/',
		component: <Posts />,
	},
	{
		path: '/posts',
		component: <Posts />,
	},
	{
		path: '/about',
		component: <About />,
	},
	{
		path: '/posts/:id',
		component: <PostIdPage />,
	},
]
