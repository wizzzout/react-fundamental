import { useMemo, useState } from 'react'
import './App.css'
import PostAdd from './components/PostAdd'
import PostFilter from './components/PostFilter'
import PostList from './components/PostList'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'BBB React', content: 'BBB Описание' },
		{ id: 2, title: 'AAA React 2', content: 'CCC Описание 2' },
		{ id: 3, title: 'CCC React 3', content: 'AAA Описание 3' },
	])

	const [filter, setFilter] = useState({ sort: '', query: '' })

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) =>
				a[filter.sort].localeCompare(b[filter.sort])
			)
		}
		return posts
	}, [filter.sort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post =>
			post.title.toLowerCase().includes(filter.query.toLowerCase())
		)
	}, [filter.query, sortedPosts])

	const createPost = newPost => {
		setPosts([...posts, newPost])
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='App'>
			<PostAdd create={createPost} />
			<hr style={{ margin: '15px 0' }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			{sortedAndSearchedPosts.length ? (
				<PostList
					remove={removePost}
					posts={sortedAndSearchedPosts}
					title='Список постов 1'
				/>
			) : (
				<h1 style={{ textAlign: 'center' }}>Постов нет</h1>
			)}
		</div>
	)
}

export default App
