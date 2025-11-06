import { useState } from 'react'
import './App.css'
import PostAdd from './components/PostAdd'
import PostList from './components/PostList'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'React', content: 'Описание' },
		{ id: 2, title: 'React 2', content: 'Описание 2' },
		{ id: 3, title: 'React 3', content: 'Описание 3' },
	])

	const createPost = newPost => {
		setPosts([...posts, newPost])
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='App'>
			<PostAdd create={createPost} />
			{posts.length !== 0 ? (
				<PostList
					remove={removePost}
					posts={posts}
					title='Список постов 1'
				/>
			) : (
				<h1 style={{ textAlign: 'center' }}>Постов нет</h1>
			)}
		</div>
	)
}

export default App
