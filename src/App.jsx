import { useState } from 'react'
import './App.css'
import PostItem from './components/PostItem'

function App() {
	const [posts, setPost] = useState([
		{ id: 1, title: 'React', content: 'Описание' },
		{ id: 2, title: 'React 2', content: 'Описание 2' },
		{ id: 3, title: 'React 3', content: 'Описание 3' },
	])

	return (
		<div className='App'>
			{posts.map(post => (
				<PostItem post={post} key={post.id} />
			))}
		</div>
	)
}

export default App
